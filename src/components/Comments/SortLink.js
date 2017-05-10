import React from 'react'
import { connect } from 'react-redux'
import t from 'prop-types'

import { setSortOrder } from '../../actions/SortActions'

const SortLink = ({ dispatch, name, sortBy }) => {
  return (
    <th onClick={() => {dispatch(setSortOrder(sortBy))}}>
      <a>{name}</a>
    </th>
  )
}

SortLink.propTypes = {
  dispatch: t.func.isRequired,
  name: t.string.isRequired,
  sortBy: t.string
}

export default connect()(SortLink)