import React from 'react'
import t from 'prop-types'
import { observer } from 'mobx-react'

@observer
class Link extends React.Component {
  static propTypes = {
    active: t.bool.isRequired,
    children: t.node.isRequired,
    onClick: t.func.isRequired
  }

  render() {
    const { filter, onClick, active, children } = this.props

    if (active) {
      return <span>{children}</span>
    }

    return (
      <a href="#"
         onClick={e => {
           e.preventDefault()
           onClick(filter)
         }}
      >{children}</a>
    )
  }
}

export default Link