import React from 'react'
import t from 'prop-types'

import PaginationStore from '../../stores/PaginationStore'

const SortLink = ({ name, sortBy }) => {
  return (
    <th onClick={() => PaginationStore.setSort(sortBy)}>
      <a>{name}</a>
    </th>
  )
}

SortLink.propTypes = {
  name: t.string.isRequired,
  sortBy: t.string
}

export default SortLink