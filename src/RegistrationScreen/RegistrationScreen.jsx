import Joi from 'joi'
import React, { useState } from 'react'

export default function RegistrationScreen() {
    let [errorArr ,setError] = useState([])
    let [registrationInfo,setregistrationInfoData] =useState({
        Name:"",
        EmailAddress:"",
        Phone:"",
        password:"",
        confirmPassword:""

    })

    let Login = (e)=>{
        let myCopyregistrationInfo ={...registrationInfo}
        myCopyregistrationInfo[e.target.name] = e.target.value
        localStorage.setItem("User",JSON.stringify(myCopyregistrationInfo))
        setregistrationInfoData(myCopyregistrationInfo)
    }

   let submit = (e)=>{
    
    e.preventDefault()
    let validate = validationLogin()
    console.log(validate)
    if(validate.error.details){
      setError(validate.error.details)
    }else{
        
    }

   }
   
   let validationLogin =()=>{
    let val = Joi.object({
        Name:Joi.string().required(),
        EmailAddress:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        Phone:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        password:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        confirmPassword:Joi.ref('password'),
    
    })
    return val.validate(registrationInfo,{abortEarly:false})
   }

  return (
    <>
    
    <div className="container">
        <div className="row align-items-center"  style={{height:"100vh"}}>
        <div className="shadow ">
            <h1 className='App text-white'>Registration</h1>
    <form onSubmit={submit} >
    <label htmlFor="Name">User Name</label>
        <input onChange={Login} type="text"className='form-control' name='Name' id='Name' />
        {errorArr.map((err,index)=>index==0 &&<div key={index} className="alert alert-danger my-2">{err.message}</div>)}
        
        <label htmlFor="EmailAddress">Email Address</label>
        <input onChange={Login} type="email"className='form-control' name='EmailAddress' id='EmailAddress' />
        {errorArr.map((err,index)=>index==1 &&<div key={index} className="alert alert-danger my-2 ">{err.message}</div>)}
        <label htmlFor="Phone">Phone Number</label>
        <input onChange={Login} type="text"className='form-control' name='Phone' id='Phone' />
        {errorArr.map((err,index)=>index==2 &&<div key={index} className="alert alert-danger my-2 ">{err.message}</div>)}
        
        <label htmlFor="password">Password</label>
        <input onChange={Login} type="password" className='form-control' name='password' id='password' />
        {errorArr.map((err,index)=>index==3 &&<div key={index} className="alert alert-danger my-2 ">{err.context.label =="password"&& "password length not less than 8 characters , contains at least one lowercase , one uppercase ,  at least one digit and special character" }</div>)}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input onChange={Login} type="password" className='form-control' name='confirmPassword' id='confirmPassword' />
        {errorArr.map((err,index)=>index==4 &&<div key={index} className="alert alert-danger my-2 ">{err.message}</div>)}
        {/* err.context.label == "password" && "Invalid Password" */}
        <div class="col-md-12 text-center">
    <button className='btn btn-outline-info m-5 w-25' >SignUp</button>
</div>
    </form>
    </div>
        </div>
    </div>

    </>
  )
}
