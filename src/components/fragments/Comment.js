import React from 'react';
import Profile from '../../assets//page/profile.png'
import {Link}from 'react-router-dom'
import styled from 'styled-components'
const Comment = (props) => {
  return (
    <div>
     <PlaceHolder className="flex flex-row">
    <Link to="/profile/:username" className="flex flex-row">
    <img src={Profile} className="my-3 mx-3 bg-contain 
    bg-center h-9 w-9 
    object-cover rounded-3xl"/>
    
    <h4 className="pt-4 text-base font-normal 
  font-sans antialiased 
  text-base border-b-[1px] 
border-slate-200  hover:border-b-[1px]  
  hover:border-blue-500">{props.username}</h4>
  </Link>
<p className='pt-4 px-2' >{props.status}</p>

    </PlaceHolder>
      <p className="px-16">{props.comment}</p>
   
    </div>
  );
}
const PlaceHolder= styled.div`

input::placeholder{
  padding-left:10px;
}
input{
  padding-left:20px;
}
`
export default Comment;