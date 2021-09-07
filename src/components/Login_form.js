import React from 'react'
import './Login_form.css';
import {Link} from 'react-router-dom';

//import './Registration.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Login_form() {
    return (
        
        <div className="outerbox" >
             <div className="inner_box">
           
            <h1 className="heading">Log In</h1><br/>
            <form >
                
             
                <div className="form-group">
                    {/* <label>First Name</label> */}
                    <div className="col-sm-6 offset-sm-3">
                   <input className="form-control" name="email" type="text"
                      placeholder="enter your email address " /><br/>
                </div></div>

               

                <div className="form-group">
                    {/* <label>Password</label> */}
                    <div className="col-sm-6 offset-sm-3">
                   <input className="form-control" name="password" type="password"
                    placeholder="enter password " 
                  /><br/>
               </div>
               </div>

              
             <div className="col-sm-6 offset-sm-3">
            <button className="btn btn-primary" type="submit">LOG IN</button><br/>
             </div><br/>
            <div className="text">Don't have an account? Please sign up...
            <Link to="Registration">Here</Link>
           </div>
            </form>
            </div>
            
        </div>
    )
}

export default Login_form
