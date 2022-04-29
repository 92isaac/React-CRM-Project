import React from 'react'
import { Link } from 'react-router-dom'
import '../Dashboard.css'

const DashboardLink = () => {
  return (
    <div className="dashboard">
      <ul>
        <li><Link to='/Main' className='links' >Dashboard</Link></li>
        <li><Link to='/Tasks' className='links' >Tasks</Link></li>
        <li><Link to='/Emails' className='links' >Emails</Link></li>
        <li><Link to='/Contact' className='links' >Contact</Link></li>
        <li><Link to='/Chats' className='links' >Chats</Link></li>
        <li><Link to='/Deals' className='links' >Deals</Link></li>
      </ul>
      
    </div>
  )
}

export default DashboardLink;
