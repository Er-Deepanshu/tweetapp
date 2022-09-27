import React from "react"
import { Link } from "react-router-dom"
function NavBarLoggedOut(props) {
  return (
    <div className="d-flex navbarNav gap-right">
      <ul className="navbar-nav nav-right">
        
        <li>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        {/* <li className="">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li> */}
      </ul>
    </div>
  )
}

export default NavBarLoggedOut
