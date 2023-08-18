import React from 'react'
import Home from "./Home";
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
export default function App() {
  return (
   
    <Router>
 <nav>
    <div className="nav-wrapper">
      <Link to="#" className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  <Routes>
    <Route exact path='/' element={<Home/>} ></Route>
    <Route exact path='/About' element={<About/>} ></Route>
    <Route exact path='/Contact' element={<Contact/>} ></Route>
  </Routes>
  
    </Router>
     
  )
}
