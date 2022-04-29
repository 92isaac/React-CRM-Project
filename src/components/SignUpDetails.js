import React, {useState} from 'react'

const SignUpDetails = () => {
  const [signupData, setSignupData] = useState({firstName:'',
  middleName:'',
  lastName:'',
  image:'',
  address:'',
  city:'',
  state:''
})



  return (
    <div>
				<form>
					<label for="chk" aria-hidden="true">Personal Data</label>
					<input type="text" name="txt" value={signupData.firstName} onChange={e=>setSignupData({firstName:e.target.value})} placeholder="First-Name" required=""/>
					<input type="text" name="txt" value={signupData.middleName} onChange={e=>setSignupData({middleName:e.target.value})} placeholder="mIddle-Name" required=""/>
					<input type="text" name="txt" value={signupData.lastName} onChange={e=>setSignupData({lastName:e.target.value})} placeholder="last-Name/Surname" required=""/>
					<input type="file" name="file" value={signupData.image} onChange={e=>setSignupData({image:e.target.value})} placeholder="image" required=""/>
					<input type="Address" name="pswd" value={signupData.address} onChange={e=>setSignupData({address:e.target.value})} placeholder="Address" required=""/>
					<input type="City" name="pswd" value={signupData.city} onChange={e=>setSignupData({city:e.target.value})} placeholder="City" required=""/>
          <select type="option" value={signupData.state} onChange={e=>setSignupData({state:e.target.value})} placeholder="State" required="">         
    <option disabled selected>--Select State--</option>
    <option value="Abia">Abia</option>
    <option value="Adamawa">Adamawa</option>
    <option value="Akwa Ibom">Akwa Ibom</option>
    <option value="Anambra">Anambra</option>
    <option value="Bauchi">Bauchi</option>
    <option value="Bayelsa">Bayelsa</option>
    <option value="Benue">Benue</option>
    <option value="Borno">Borno</option>
    <option value="Cross Rive">Cross River</option>
    <option value="Delta">Delta</option>
    <option value="Ebonyi">Ebonyi</option>
    <option value="Edo">Edo</option>
    <option value="Ekiti">Ekiti</option>
    <option value="Enugu">Enugu</option>
    <option value="FCT">Federal Capital Territory</option>
    <option value="Gombe">Gombe</option>
    <option value="Imo">Imo</option>
    <option value="Jigawa">Jigawa</option>
    <option value="Kaduna">Kaduna</option>
    <option value="Kano">Kano</option>
    <option value="Katsina">Katsina</option>
    <option value="Kebbi">Kebbi</option>
    <option value="Kogi">Kogi</option>
    <option value="Kwara">Kwara</option>
    <option value="Lagos">Lagos</option>
    <option value="Nasarawa">Nasarawa</option>
    <option value="Niger">Niger</option>
    <option value="Ogun">Ogun</option>
    <option value="Ondo">Ondo</option>
    <option value="Osun">Osun</option>
    <option value="Oyo">Oyo</option>
    <option value="Plateau">Plateau</option>
    <option value="Rivers">Rivers</option>
    <option value="Sokoto">Sokoto</option>
    <option value="Taraba">Taraba</option>
    <option value="Yobe">Yobe</option>
    <option value="Zamfara">Zamfara</option>
          </select>
					<button>Sign up</button>
				</form>
    </div>
  )
}

export default SignUpDetails
