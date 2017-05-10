import t from 'prop-types'
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
  users: t.arrayOf(t.shape({  
    id: t.number.isRequired,
    name: t.string.isRequired,
    username: t.string.isRequired,
    website: t.string
  }))
}

export default User