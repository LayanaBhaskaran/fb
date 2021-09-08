import React from 'react'

function Reg_Validation(values) {
    let errors={};

    if(!values.firstname){
        errors.firstname="first name can't be empty"
    }
     
    if(!values.email){
        errors.email="email can't be empty"
    }

    if(!values.password){
        errors.password="password can't be empty"
    }else if (values.password.lenght < 5){
        errors.password="password must be more than 5 characters"
    }

    if(!values.cpassword){
        errors.cpassword="password can't be empty"
    }

    return  errors;
    
}

export default Reg_Validation
