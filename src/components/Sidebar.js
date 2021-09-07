import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs';
import './Sidebar.css';
import happy from './happy.PNG';
import social from './social.PNG';

function Sidebar() {
    return (
        <div>
         
        <div className="text"> Facebook helps you connect and share with the people in your life!
        <img  src={social}/>
        </div>
       
       {/* <div className="happy"><img  src={happy}/> </div> */}
        
      </div>  
    )
}

export default Sidebar
