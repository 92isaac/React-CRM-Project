import React, {useState} from 'react'
import './Input.css'
import { Link, useNavigate } from 'react-router-dom'
import CurrentYear from '../common/CurrentYear'




const Input = () => {
	const [UserD, setUserD]=useState({email:'',password:'', })
	const [createAccount, setCreateAccount]=useState({username:'', email:'', password:'', confirmPassword:''}) 


	//  const isLoggedIn = true
	 const navigate = useNavigate()



 const handleSignup=(event)=>{
	 event.preventDefault()
	 createAccount.password === createAccount.confirmPassword ?  alert('successful') : alert('password do not match')
 }

 const handleSubmit=(e)=>{
	 e.preventDefault();
    navigate("/Main", {replace: true});
 }


  return (
    <div className="first">
     <div className="background">
     <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form onSubmit={handleSignup}>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" value={createAccount.username} onChange={e=>setCreateAccount({username:e.target.value})}  placeholder="Username" required=""/>
					{/* <p>{message}</p> */}
					<input type="email" name="email" value={createAccount.email} onChange={e=>setCreateAccount({email:e.target.value})} placeholder="Email" required=""/>
					{/* <p>{message}</p> */}
					<input type="password" name="pswd" value={createAccount.password} onChange={e=>setCreateAccount({password:e.target.value})} placeholder="Password" required=""/>
					{/* <p>{message}</p> */}
					<input type="password" name="pswd" value={createAccount.confirmPassword} onChange={e=>setCreateAccount({confirmPassword:e.target.value})} placeholder="Confirm-Password" required=""/>
					{/* <p>{message}</p> */}
					<button type='submit'>Sign up</button>
				</form>
			</div>

			<div className="login">
				{/* <h6>{createText}</h6> */}
				<form  onSubmit={handleSubmit}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" value={UserD.email} onChange={e=> setUserD({email:e.target.value})} required=""/>
					<input type="password" name="pswd" placeholder="Password" value={UserD.password} onChange={e=> setUserD({password:e.target.value})} required=""/>
					<button type='submit'>
						{/* <Link to={<Display/>} > */}
							Login
							{/* </Link> */}
							</button>
          <div className="forgoten-password">
            <p><Link to='/Sign up' className='sign-up' >Sign Up</Link></p>
            <p><Link to='/Sign up' className='sign-up' >forgotten password</Link></p>
          </div>
				</form>
			</div>

	</div>
	</div>
        <footer className="date">©{<CurrentYear/>}</footer>
	</div>
  )
}

export default Input
