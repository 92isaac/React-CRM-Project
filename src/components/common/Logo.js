import React from 'react'
import { Link } from 'react-router-dom'



const logoText={
  fontStyle: "italic",
  fontWeight: "900",
  color: "white",
  margin: "10px",
  textDecoration: "none",
}


const Logo = () => {
  return (
    <div style={logoText}>
      <Link to='/' className='logo' >Caasi</Link>
    </div>
  )
}

export default Logo
