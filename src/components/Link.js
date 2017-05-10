import React from 'react'
import t from 'prop-types'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: t.bool.isRequired,
  children: t.node.isRequired,
  onClick: t.func.isRequired
}

export default Link