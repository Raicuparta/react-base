import { observable, action } from 'mobx'

class PaginationStore {

  @observable sort = ''
  @observable order = 'DESC'

  @action setSort(sort) {
    if (this.sort === sort)
      this.order = this.order === 'ASC' ? 'DESC' : 'ASC'
    else
      this.sort = sort
  }

}

const paginationStore = new PaginationStore()

export default paginationStore
export { PaginationStore }