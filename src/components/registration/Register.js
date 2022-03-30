import React, { useState } from 'react'
import NavbarApp from '../navbar/Navbar'
import './Register.css'
import ModelImg from './img/model.jpg';
import MusicImg from './img/music.jpg';
import PoemImg from './img/poem.jpg';
import OtherImg from './img/other.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRole } from '../../redux/counter/mode';


const Register = () => {
  const dispatch = useDispatch()
  const light = useSelector(state=>state.mode.light)
  
  const handleRoleType=(roleType)=>{
      dispatch(setRole(roleType))
  }

  return (
    <div className={light?"register":"register__dark"}>
        <div className='register__box'>
           
            <div onClick={()=>handleRoleType("model")}>
            <Link to={"/registeruser"}>
                <div><img src={ModelImg} /></div>
                <p>Model</p>
                </Link>
            </div>
           
           
            <div onClick={()=>handleRoleType("musician")}>
            <Link to={"/registeruser"}>
              <div><img src={MusicImg} /></div>
              <p>Musician</p>
            </Link>
            </div>
          
          
              <div onClick={()=>handleRoleType("poet")}>
              <Link to={"/registeruser"}>
                <div><img src={PoemImg} /></div>
                <p>Poet</p>
              </Link>
              </div>
           
           
           <div style={{width:"190px" }} onClick={()=>handleRoleType("other")}>
           <Link to={"/registeruser"}>
              <div style={{border:"1px solid #F2F2F2",width:"190px" }}><img src={OtherImg} /></div>
              <p>other</p>
            </Link>
           </div>
          
 </div>
    </div>
  )
}

export default Register