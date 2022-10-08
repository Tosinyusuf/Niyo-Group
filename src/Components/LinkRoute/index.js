import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const LinkRoute = ({ to, className, children }) => {
  return (
    <Link to={to} className={`${className && className}`}>
      {children}
    </Link>
  )
}

LinkRoute.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
}
