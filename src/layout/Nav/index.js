import React from 'react'
import { LinkRoute } from '../../Components/LinkRoute'
import Logo from '../../Asset/images/logo.png'
import { Auth } from './component/Auth'
import { MobileNav } from './component/MobileNav'

const Nav = () => {
  return (
    <div className="navContainer">
      <div className="flex NavContainer">
        <LinkRoute to="/" className="">
          <img src={Logo} alt="HomeLogo" />
        </LinkRoute>
        <div className="grid">
          <LinkRoute to="/" className="links">
            <h4 className="">Events</h4>
          </LinkRoute>
          <LinkRoute to="/" className="links">
            <h4 className="">Museum</h4>
          </LinkRoute>
          <LinkRoute to="/" className="links">
            <h4 className="">Arts</h4>
          </LinkRoute>
          <LinkRoute to="/" className="links">
            <h4 className="">Gallaries</h4>
          </LinkRoute>
          <div>
            <Auth />
          </div>
        </div>
      </div>
      <div className="mobile">
        <MobileNav />
      </div>
    </div>
  )
}

export default Nav
