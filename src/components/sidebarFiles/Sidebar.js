import React from 'react'
import Logo from '../common/Logo'
import Avartar from '../common/Avartar'
import Settings from './Settings'
import './Sidebar.css'
import view from './images/rock.png'
import '../../Dashboard.css'
import {Link} from 'react-router-dom'
// import {Routes, Route} from 'react-router-dom'
// import Chats from '../components/homepages/Chats'
// import Deals from '../components/homepages/Deals'
// import Email from '../components/homepages/Email'
// import Tasks from '../components/homepages/Tasks'
// import Main from './Main'


const Sidebar = () => {


  // const {path, URL}=RouteMatch()
  return (

    <div className="main">
      <div className="logo">{<Logo/>}</div>
      <div className="body">
      <div className="avatar-desc">
        <Avartar imgUrl={view} />
        <div className="userDetails">
          <h3>Arowomole Eziuche</h3>
          <p>3designhub@gmail.com</p>
        </div>
      </div>
    <div className="dashboard">
      <ul>
        <li><Link to='/Main' className='links' >Dashboard</Link></li>
        <li><Link to='/Tasks' className='links' >Tasks</Link></li>
        <li><Link to='/Emails' className='links' >Emails</Link></li>
        <li><Link to='/Contact' className='links' >Contact</Link></li>
        <li><Link to='/Chats' className='links' >Chats</Link></li>
        <li><Link to='/Deals' className='links' >Deals</Link></li>
      </ul>


       {/* <Routes>
          <Route path='/Main' element={<Main/>} exact />
          <Route path='Tasks' element={<Tasks/>}/>
          <Route path='/Email' element={<Email/>}/>
          <Route path='/Chat' element={<Chats/>}/>
          <Route path='/Deals' element={<Deals/>}/>
        </Routes> */}
      
    </div>
      <div className='settings'>
      <Settings/>
      </div>
      </div>

    </div>


  )
}

export default Sidebar;
