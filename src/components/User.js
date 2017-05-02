import PropTypes from 'prop-types'
import React from 'react'

const User = ({ info }) => (
  <tr>
    <td>{info.id}</td>
    <td>{info.name}</td>
    <td>{info.username}</td>
    <td>{info.website}</td>
  </tr>
)

User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({  
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    website: PropTypes.string
  }))
}

export default User