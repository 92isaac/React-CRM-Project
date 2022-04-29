import React from 'react'
import { Link } from 'react-router-dom'
import '../Home.css'
import LoginNavbar from '../navbarFiles/LoginNavbar'

const Home = () => {
  return (
    <div className="ground">
        <LoginNavbar/>
      <div className="text-box">
        <h1>Biggest Customer Services</h1>
         <p>Excellent customer service is the number one job in any company! It is the personality of the company and the reason customers come back. Without customers there is no company!"<br/> - Connie Edler</p>
         <Link to='/product'className="hero-btn">&rarr; Explore</Link>
    </div>
    
    </div>
  )
}

export default Home
