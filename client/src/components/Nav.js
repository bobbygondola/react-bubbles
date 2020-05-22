import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <h1>Color Bananza</h1>
           <Link to="/"><button className="navbuts">Home</button></Link> 
            <Link to="/"><button className="navbuts">Logout</button></Link>
            <br />
            <Link to="/"><button className="navbuts" >Protected Route</button></Link>
            <p>Welcome to Color Bananza</p>

        </div>
    )
}
export default Nav;