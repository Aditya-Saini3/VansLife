import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import loginIcon from "../assets/images/avatar-icon.png"

export default function Header() {
  const navStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <header>
        <Link to="/" className='site-logo'>#VANLIFE</Link>
        <nav>
          <NavLink 
          to="/host"
          style={({isActive}) => isActive ? navStyle : null}
          >Host</NavLink>
          <NavLink 
          to="/about"
          style={({isActive}) => isActive ? navStyle : null}
          >About</NavLink>
          <NavLink 
          to="/vans"
          style={({isActive}) => isActive ? navStyle : null}
          >Vans</NavLink>
          <Link to="login" className="login-link">
              <img 
                  src={loginIcon}
                  className="login-icon"
              />
          </Link>
        </nav>
    </header>
  )
}
