import React from 'react'
import NavbarApp from '../navbar/Navbar'
import './Register.css'
import ModelImg from './img/model.jpg';
import MusicImg from './img/music.jpg';
import PoemImg from './img/poem.jpg';
import OtherImg from './img/other.jpg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Register = () => {
  const light = useSelector(state=>state.mode.light)

  return (
    <div className={light?"register":"register__dark"}>
        <div className='register__box'>
           
            <div>
            <Link to={"/registeruser"}>
                <div><img src={ModelImg} /></div>
                <p>Model</p>
                </Link>
            </div>
           
           
            <div>
            <Link to={"/registeruser"}>
            <div><img src={MusicImg} /></div>
            <p>Musician</p>
            </Link>
            </div>
          
          
              <div>
              <Link to={"/registeruser"}>
              <div><img src={PoemImg} /></div>
              <p>Poet</p>
              </Link>
              </div>
           
           
           <div style={{width:"190px" }}>
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