import PropTypes from 'prop-types'
import React from 'react'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

Topic.propTypes = {
  match: PropTypes.object.isRequired
}

export default Topic