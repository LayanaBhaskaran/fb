import React from 'react'
import fblogo from './fblogo.PNG';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {BsFillPersonFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

function Header() {
    return (
    //   <div className="main_header">
    //     <div className="left_header">
    //         <img src={fblogo}/> 
    //      </div>
    //         <div className="middle_header">
    //         <SearchIcon /> 
    //         <input type="text"/>
    //         </div>
    //     </div>
    <div>
        
    <div className="main_header" >
    <Link to="Registration">Register</Link>
    <Link to="Login_form">Login</Link>
    <Link to="/">Home</Link>
          
         <img className="logo" src={fblogo}/> 
         {/* <div className="person">
         <BsFillPersonFill/>
         </div> */}

         <div className="search_icon">
         <SearchIcon /> 
        </div>
        <div className="middle_header"><input className="search" placeholder="Search" type="text"/></div>
        <div className="person">
            
        {/* <BsFillPersonFill/> */}
        </div>
        {/* <p className="text">Login</p>
        <p className="text1">Register</p> */}
     </div>
     </div>
    )
}

export default Header
