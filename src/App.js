import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LoginNavbar from './components/navbarFiles/LoginNavbar';
import Home from './components/loginpages/Home';
import Product from './components/loginpages/Product';
import About from './components/loginpages/About';
import ContactUs from './components/loginpages/ContactUs';
import SignUp from './components/loginpages/SignUp';
// import Display from './components/Display';
import Main from './components/dashboard/Main'
import Tasks from './components/homepages/Tasks'
import Email from './components/homepages/Email'
import Chats from './components/homepages/Chats'
import Deals from './components/homepages/Deals'




function App() {
  const loggedIn = true
  return (
    <>
    {/* <Display/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='Product' element={<Product/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/SignUp' element={<SignUp/>}> </Route>  
          {/* <Route path='/Display' element={<Display/>}/>  */}
         <Route path='/Main' element={<Main/>}  />
          <Route path='Tasks' element={<Tasks/>}/>
          <Route path='/Email' element={<Email/>}/>
          <Route path='/Chat' element={<Chats/>}/>
          <Route path='/Deals' element={<Deals/>}/>
        </Routes>
      </Router>
      {/* <Route path='/Display' element={<Display/>}/>  */}


      </>
  );
}

export default App;
