import React from 'react'
import PropTypes from 'prop-types'

const AuthBtn = (props) => {
  const { className, text } = props
  return (
    <div 
        className={className}
      >
        <span> {text} </span>
    </div>
  )
}

AuthBtn.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
}
export default AuthBtn
