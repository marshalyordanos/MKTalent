import React from 'react'
import Profile from './profile.png'
const RightSideBarUserCard = (props) => {
  return (
    <div>
     <span className="flex flex-rows px-11 "><img src={Profile} className="my-2 bg-contain bg-center h-9 w-9 object-cover rounded-3xl"/>
<div className="py-2 flex flex-col text-xs px-2 ">
  <h1 className="font-medium 
  font-sans antialiased 
  text-base border-b-2  
border-slate-100  hover:border-b-2  
  hover:border-blue-500">{props.username}</h1>
<p>{props.status}</p></div></span>
    </div>
  )
}

export default RightSideBarUserCard
