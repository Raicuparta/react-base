import React from 'react'
import { observer } from 'mobx-react'

import Link from './Link'

@observer
class Footer extends React.Component {

  render() {
    const { onClick, filter } = this.props
    return(
      <p>
        Show:
        {" "}
        <Link filter="SHOW_ALL" onClick={onClick} active={filter==='SHOW_ALL'}>
          All
        </Link>
        {", "}
        <Link filter="SHOW_ACTIVE" onClick={onClick} active={filter==='SHOW_ACTIVE'}>
          Active
        </Link>
        {", "}
        <Link filter="SHOW_COMPLETED" onClick={onClick} active={filter==='SHOW_COMPLETED'}>
          Completed
        </Link>
      </p>
    )
  }
}

export default Footer