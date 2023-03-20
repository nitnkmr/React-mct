import React from 'react'
import "./Nabvar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav">
        <div className="part"></div>
        <div className=" part1">
        <Link to="/Home">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Users">Users</Link>
        <Link to="/Contacts">Contacts</Link>
        <button id='logout'><Link to="/">Log Out</Link></button>
        </div>
    </div>
  )
}

export default Navbar