import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader (props) {
  console.log(props)
    return (
      <h1>
        {props.children}
      </h1>
    )
}

TodoHeader.propTypes = {
  desc:PropTypes.string.isRequired
}
TodoHeader.defaultProps = {
  desc:'如果还有'
}