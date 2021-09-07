import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import ErrorModel from './ErrorModel';
import axios from 'axios';

function Registration() {

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
    const [error,setError] = useState();    
    var data ={
        firstname,
       lastname,
       email,
        password,
         cpassword
   } ;

    
    const formHandler=(event)=>{
        event.preventDefault();  
        if(firstname.trim().length === 0 || 
           lastname.trim().length === 0 || 
           email.trim().length === 0||
           password.trim().length === 0||
           cpassword.trim().length === 0)
           {
            setError(
                {
                    title:'error',
                    message : 'pls provide all details'
                }
            );
           }
          
    };
    
    


       // setFirstname("");
       
       

//    async function submitHandler()
//    {
     
//      console.warn(firstname);
//      let item={firstname,lastname,email,password,cpassword};
//      let result= await fetch("http://emp.angyal.in/ANG00152/fb_app/REST/login/",
//      {method:'POST',body:JSON.stringify(item)});
//      result= await result.json();
//      localStorage.setItem(JSON.stringify(result))

    
//     }


      function submitHandler(event)
         {
            event.preventDefault(); 
            //alert("submitted");
            axios.post("http://emp.angyal.in/ANG00152/fb_app/REST/login/",data).then(response=>{alert(response)})
         }


    const firstnameHandler=(event)=>{
        setFirstname(event.target.value);
    }

    const lastnameHandler=(event)=>{
        setLastname(event.target.value);
    }

    const emailHandler=(event)=>{
        setEmail(event.target.value);
    }

    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }

    const cpasswordHandler=(event)=>{
        setCpassword(event.target.value);
    }

    return (

          






        <div className="outerbox" >
             <div className="inner_box">
           
            <h1 className="heading">Sign Up</h1>
            <h5>Please fill  this form to create an account!</h5>
            <br/>
            <form onSubmit={formHandler}>
                
             
                <div className="form-group">
                    {/* <label>First Name</label> */}
                    <div className="col-sm-6 offset-sm-3">
                   <input className="form-control" name="firstname" type="text"
                      placeholder="enter first name " onChange={firstnameHandler}/><br/>
                </div></div>

                <div className="form-group">
                    {/* <label>Last Name</label> */}
                    <div className="col-sm-6 offset-sm-3">
                    <input className="form-control" name="lastname" type="text"
                    placeholder="enter last name " onChange={lastnameHandler}/><br/>
               </div>

               <div className="form-group">
                    {/* <label>Email</label> */}
                    <div className="col-sm-6 offset-sm-3">
                   <input className="form-control" name="email" type="text" 
                    placeholder="enter email address " onChange={emailHandler}/><br/>
                </div></div>

                <div className="form-group">
                    {/* <label>Password</label> */}
                    <div className="col-sm-6 offset-sm-3">
                   <input className="form-control" name="password" type="password"
                    placeholder="enter password " 
                   onChange={passwordHandler}/><br/>
               </div></div>

              <div className="form-group">
                    {/* <label>Confirm Password</label> */}
                    <div className="col-sm-6 offset-sm-3">
                  <input className="form-control" name="cpassword" type="password"
                   placeholder="confirm password " onChange={cpasswordHandler} /><br/>
             </div></div>
             <div className="col-sm-6 offset-sm-3">
            <button className="btn btn-primary" type="submit" 
             onClick={submitHandler}>SIGN UP</button>
             </div></div>
            
            </form>
            </div>
            <div> {error && <ErrorModel title={error.title} message={error.message} />}
              </div>
        </div>
    );
}

export default Registration
