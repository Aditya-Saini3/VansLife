import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function HostLayout() {
  const navStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <>
        <nav className='host-nav'>
            <NavLink 
            to="."
            end
            style={({isActive}) => isActive ? navStyle : null}
            >Dashboard</NavLink>
            <NavLink 
            to="/host/income"
            style={({isActive}) => isActive ? navStyle : null}
            >Income</NavLink>
            <NavLink 
            to="/host/vans"
            style={({isActive}) => isActive ? navStyle : null}
            >Vans</NavLink>
            <NavLink 
            to="/host/reviews"
            style={({isActive}) => isActive ? navStyle : null}
            >Reviews</NavLink>
        </nav>
        <Outlet />
    </>
  )
}
