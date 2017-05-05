import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setSortOrder } from '../actions/SortActions'

const SortLink = ({ dispatch, name, sortBy }) => {
  return (
    <th onClick={() => {dispatch(setSortOrder(sortBy))}}>
      <a>{name}</a>
    </th>
  )
}

SortLink.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  sortBy: PropTypes.string
}

export default connect()(SortLink)