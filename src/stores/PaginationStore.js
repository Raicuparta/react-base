import { observable, action, reaction } from 'mobx'

class PaginationStore {

  @observable sort = ''
  @observable order = 'DESC'
  @observable page = 0
  @observable content = []
  @observable totalCount = 1
  @observable cancelFetch = false
  @observable loading = true
  @observable url = ''
  @observable maxItems = '10'
  @observable search = ''

  @action setSort(sort) {
    if (this.sort === sort)
      this.order = this.order === 'ASC' ? 'DESC' : 'ASC'
    else
      this.sort = sort
  }

  fetchPage = reaction(
    // the following condition defines what attributes must be changed to trigger the reaction:
    () => this.url + this.page + this.sort + this.order + this.search,
    () => {
    this.loading = true
    let search = this.search.length > 0 ? '&id=' + this.search : ''

    let url = this.url + '?_page=' + this.page + '&_limit=' + this.maxItems + '&_sort=' + this.sort + '&_order=' + this.order + search    
    fetch(url)
      .then((response) => {
        this.totalCount = parseInt(response.headers.get('x-total-count'), 10)
        return response.json()
      }).then((json) => {
        //if (this.cancelFetch) return
        this.loading = false
        this.content = json
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  })
}

const paginationStore = new PaginationStore()

export default paginationStore
export { PaginationStore }
