import PropTypes from 'prop-types'
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const User = ({ info }) => (
  <LinkContainer to={"users/" + info.id}>
    <tr>
      <td>{info.id}</td>
      <td>{info.name}</td>
      <td>{info.username}</td>
      <td>{info.website}</td>
    </tr>
  </LinkContainer>
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