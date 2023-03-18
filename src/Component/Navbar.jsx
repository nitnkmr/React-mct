import React from 'react'
import "./Nabvar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav">
        <div className="part"></div>
        <div className="part part1">
        <Link to="/Home">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Users">Users</Link>
        <Link to="/Contacts">Contacts</Link>
        </div>
    </div>
  )
}

export default Navbar