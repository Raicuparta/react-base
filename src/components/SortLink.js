import React from 'react'
import { connect } from 'react-redux'
import { setSortOrder } from '../actions/SortActions'

const SortLink = ({ dispatch, name, sortBy }) => {
  return (
    <th onClick={() => {dispatch(setSortOrder(sortBy))}}>
      <a>{name}</a>
    </th>
  )
}

export default connect()(SortLink)