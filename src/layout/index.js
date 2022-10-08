import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

export const Layout = ({ children }) => {

  return (
    <div>
      <div className='app'>
        <Nav />
        <div className="">{children}</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
}

