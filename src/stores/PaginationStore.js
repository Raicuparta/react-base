import { observable, action, reaction } from 'mobx'

class PaginationStore {

  @observable sort = ''
  @observable order = 'DESC'
  @observable page = 0
  @observable content = []
  @observable totalCount = 1
  @observable cancelFetch = false
  @observable loading = false
  @observable url = ''
  @observable maxItems = 0
  @observable search = ''

  @action setSort(sort) {
    if (this.sort === sort)
      this.order = this.order === 'ASC' ? 'DESC' : 'ASC'
    else
      this.sort = sort
  }

  @action reset() {
    this.sort = ''
    this.order = 'DESC'
    this.page = 0
    this.content = []
    this.totalCount = 1
    this.cancelFetch = true
    this.loading = false
    this.url = ''
    this.maxItems = 0
    this.search = ''
  }

  fetchPage = reaction(
    // the following line defines what attributes must be changed to trigger the reaction:
    () => this.url + this.page + this.sort + this.order + this.search,
    () => {
      if (this.url === '') return
      this.loading = true
      let search = this.search.length > 0 ? '&id=' + this.search : ''

      let url = this.url + '?_page=' + this.page + '&_limit=' + this.maxItems + '&_sort=' + this.sort + '&_order=' + this.order + search    
      fetch(url)
        .then((response) => {
          this.totalCount = parseInt(response.headers.get('x-total-count'), 10)
          return response.json()
        }).then((json) => {

          if (this.cancelFetch) this.cancelFetch = false
          else {
            this.loading = false
            this.content = json
          }
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
    })
}

const paginationStore = new PaginationStore()

export default paginationStore
export { PaginationStore }
