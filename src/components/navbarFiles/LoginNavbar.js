import React from 'react';
import { Link } from 'react-router-dom';
import './LoginNavbar.css';

const LoginNavbar = () => {
  return (
      <nav>
        <div className='logo-text'>
          <Link to='/' className='logo' >Caasi</Link>
        </div>

        <div className='navlink'>
          <ul className="nav-links">
            <li><Link to='/' className='links' >Home</Link></li>
            <li><Link to='/product' className='links' >Product</Link></li>
            <li><Link to='/about' className='links' > About Us</Link></li>
            <li><Link to='/contactUs' className='links' > Contact Us</Link></li>
            <li><Link to='/signUp' className='links sign-up' > Sign Up</Link></li>
          </ul>
        </div>
      </nav>
  )
}

export default LoginNavbar
