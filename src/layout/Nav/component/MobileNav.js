import React, { useState } from 'react'
import { LinkRoute } from '../../../Components/LinkRoute'
import Logo from '../../../Asset/images/logo.png'
import PropTypes from 'prop-types'
import HamburgerMenu from '../../../Asset/images/HamMenu.svg'
import { Auth } from './Auth'

export const MobileNav = () => {
  const [isopen, setisopen] = useState(false)

  const toggle = () => {
    setisopen(!isopen)
  }

  return (
    <>
      <div className='Nav'>
        <LinkRoute to="/">
          <img src={Logo} alt="logo" style={{ height: '40px' }} />
        </LinkRoute>

        <div clasName="menuIcon" onClick={toggle}>
          <img className='hamburger' src={HamburgerMenu} alt="menu" />
        </div>
      </div>
      <div className='NavMenu'>
        <div className={isopen ? 'nav-menu active' : 'nav-menu'}>
          <div className="MobileList">
            <LinkRoute to="/" className="contentListMobile">
              <h4 className="content">
              Events
              </h4>
            </LinkRoute>
            <LinkRoute to="/" className="contentListMobile">
              <h4 className="">
              Museum
              </h4>
            </LinkRoute>
            <LinkRoute to="/" className="contentListMobile">
              <h4 className="">
              Arts
              </h4>
            </LinkRoute>
            <LinkRoute to="/" className="contentListMobile">
              <h4 className="">
              Gallaries
              </h4>
            </LinkRoute>
            <div className="MobileAuth" onClick={toggle}>
              <Auth />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

MobileNav.propTypes = {
  changeTheme: PropTypes.func,
}