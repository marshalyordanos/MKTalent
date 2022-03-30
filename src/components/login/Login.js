import { TextField } from '@mui/material'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import Model from '../../utils/Model'
import './login.css'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
const Login = () => {
    const light = useSelector(state=>state.mode.light)
  
    const [value,setValue]=useState({
        email:"",
        password:""
    })

    

  const toastOption={
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme:light?"light":"dark"
    // progress: undefined
   }
    const handleLogin=()=>{
        const {email,password} = value
        if(!email){
            toast.error("Please provide your email",toastOption)
          }
          else if(!password){
            toast.error("Please provide your password",toastOption)
          }
    }
  return (
        <div className={light?"login":"login login__dark"}>
        <h1>Login</h1>
        <input onChange={(e)=>setValue({...value,email:e.target.value})} type={"text"} placeholder="username"/>
        <input onChange={(e)=>setValue({...value,password:e.target.value})} type={"password"} placeholder="password"/>

        <Button onClick={handleLogin} variant='success' >Login</Button>
        <ToastContainer/>
    </div>
  )
}

export default Login