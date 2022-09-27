import React, { useContext } from "react"
import { Link } from "react-router-dom"
import NavBarLoggedOut from "./NavBarLoggedOut"
import NavBarLoggedIn from "./NavBarLoggedIn"
import StateContext from "../../StateContext"

function NavBar(props) {
  const globalState = useContext(StateContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark skyblue justify-content-between gap-bottom">
      <div className="narbar-logo gap-left ">
        
            {/* <nav class="navbar navbar-light bg-light"> */}
              {/* <a class="navbar-brand" href="#"> */}
            <img src="https://img.freepik.com/free-vector/twitter-logo-design_1035-8934.jpg?w=740&t=st=1662380483~exp=1662381083~hmac=eff0f764ee4a0d261d86e805df3ad1b10c26109035cbf50733f22731d2976ee1" width="110" height="100" alt="" />

              {/* </a> */}
          {/* </nav> */}
        
        <Link className="navbar-brand" to="/" >
            TweetApp Application
        </Link>
        </div>
      
      {globalState.loggedIn ? <NavBarLoggedIn /> : <NavBarLoggedOut />}
    </nav>
  )
}

export default NavBar
