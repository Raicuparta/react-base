const sortOrder = (state = {sort: '', desc: false}, action) => {
  switch (action.type) {
    case 'SET_SORT_ORDER':
      // if clicking on an already selected column, switch the sort order
      // otherwise, change the sort method and default the order to descending
      return {sort: action.sort, desc: (state.sort === action.sort) ? !state.desc : false}
    default:
      return state
  }
}

export default sortOrder