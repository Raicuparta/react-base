import React from 'react'
import { connect } from 'react-redux'
import { setSortOrder } from '../actions/SortActions'

const SortLink = ({ dispatch, name, sortBy }) => {
  return (
    <th>
      <a onClick={() => {dispatch(setSortOrder(sortBy))}}>{name}</a>
    </th>
  )
}

export default connect()(SortLink)