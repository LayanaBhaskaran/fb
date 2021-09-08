//import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
//import Reg_Validation from './Reg_Validation';
import ErrorModel from './ErrorModel';
//import axios from 'axios';

function Registration() {

   
    const [values,setValues] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        cpassword:''
    });
    const [errors,setErrors]= useState();
   
    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        });
    };
      
//     var data ={
//         fName:firstname,
//        lName:lastname,
//        email:email,
//         psw:password,
//          cpassword
//    } ;

    
    const formHandler=(event)=>{
        event.preventDefault();  
         if(values.firstname.trim().length === 0 || 
         values.lastname.trim().length === 0 || 
         values.email.trim().length === 0||
         values.password.trim().length === 0||
         values.cpassword.trim().length === 0)
            {
             setErrors(
                 {
                     title:'error',
                     message : 'pls provide all details'
                 }
             );
            }
          
    };
    
    const errorHandler = () =>{
        setErrors(null);
};



       // setFirstname("");
       
       

//    async function submitHandler()
//    {
     
//      console.warn(firstname);
//     
//      let result= await fetch("http://emp.angyal.in/ANG00152/fb_app/REST/login/",
//      {method:'POST',body:JSON.stringify(data)});
//      result= await result.json();
//      localStorage.setItem(JSON.stringify(result))

    
//     }


      function submitHandler(event)
         {
            event.preventDefault(); 
             
            //setErrors(Reg_Validation(values));
            //alert("submitted");
            // axios.post("http://emp.angyal.in/ANG00152/fb_app/REST/login/",data).
            // then(response=>{alert(response)})
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
                   <input className="form-control" name="firstname" type="text" value={values.firstname}
                      placeholder="enter first name " onChange={handleChange}/>
                      
                      <br/>
                      {/* {errors.firstname && <p>{errors.firstname}</p>} */}
                </div></div>

                <div className="form-group">
                    {/* <label>Last Name</label> */}
                    <div className="col-sm-6 offset-sm-3">
                    <input className="form-control" name="lastname" type="text" value={values.lastname}
                    placeholder="enter last name " onChange={handleChange}/><br/>
               </div>

               <div className="form-group">
                    {/* <label>Email</label> */}
                    <div className="col-sm-6 offset-sm-3">
                   <input className="form-control" name="email" type="text" value={values.email}
                    placeholder="enter email address " onChange={handleChange}/><br/>
                    {/* {errors.email && <p>{errors.email}</p>} */}
                </div></div>

                <div className="form-group">
                    {/* <label>Password</label> */}
                    <div className="col-sm-6 offset-sm-3">
                   <input className="form-control" name="password" type="password" value={values.password}
                    placeholder="enter password " 
                   onChange={handleChange}/><br/>
                    {/* {errors.password && <p>{errors.password}</p>} */}
               </div></div>

              <div className="form-group">
                    {/* <label>Confirm Password</label> */}
                    <div className="col-sm-6 offset-sm-3">
                  <input className="form-control" name="cpassword" type="password"  value={values.cpassword}
                   placeholder="confirm password " onChange={handleChange} /><br/>
             </div></div>
             <div className="col-sm-6 offset-sm-3">
            <button className="btn btn-primary" type="submit" 
             onClick={submitHandler}>SIGN UP</button>
             </div></div>
            
            </form>
            </div>
            {/* <div> {error && <ErrorModel title={error.title} message={error.message} />}
              </div> */}
                     <div> {errors && <ErrorModel title={errors.title} message={errors.message} 
                      onConfirm={errorHandler}/>} </div>
        </div>
    );
}

export default Registration
