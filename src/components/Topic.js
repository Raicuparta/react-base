import React from 'react'
import t from 'prop-types'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

Topic.propTypes = {
  match: t.object.isRequired
}

export default Topic