import React from 'react'
import './Fbheader.css';
import {BsFillPersonFill,} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
function Fbheader() {
    return (
        <div className="header">
            <div className="hleft">
           <div className="fblogo"> <FaFacebook/></div>
           
            </div>

            <div className="hcenter">
            </div>

            <div className="hlast">
            <BsFillPersonFill className="person"/>
            </div>

            
        </div>
    )
}

export default Fbheader
