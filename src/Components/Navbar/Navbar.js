import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assects/logo.jpg'
import './navbar.css'

function Navbar() {
  return( 
    <>
    
    <nav className='navbar'>
      <div className='hive'>
        <img src={logo} className='img'></img>
        <h1>HIVE</h1>
      </div>
      <ul>
          <li><Link to='/dashboard'>Home</Link></li>
          <li><Link to='/'>Login</Link></li>
      </ul>
    </nav>
   </>
  )
}

export default Navbar