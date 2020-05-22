import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <h1>Color Bananza</h1>
           <Link to="/"><button>Home</button></Link> 
            <Link to="/"><button>Logout</button></Link>
            <p>Welcome to Color Bananza</p>
            
        </div>
    )
}
export default Nav;