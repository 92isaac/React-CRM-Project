import React from 'react'
import { Link } from 'react-router-dom'
import './Settings.css'

const Settings = () => {
  return (
      <ul>
        <li><Link to='/Product' className='links' >Settings</Link></li>
        <button>Toggle Dashboard</button>
      </ul>
  )
}

export default Settings
