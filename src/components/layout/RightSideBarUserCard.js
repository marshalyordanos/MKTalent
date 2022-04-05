import React from 'react'
import Profile from '../../assets/page/profile.png'
const RightSideBarUserCard = (props) => {
  return (
    <div className=' h-[55px] '>
     <span className="flex  flex-rows px-9 "><img src={Profile} className="my-2 bg-contain bg-center h-9 w-9 object-cover rounded-3xl"/>
<div className="p-0 flex flex-col justify-start text-xs px-2 ">
  <h4 className="p-0 text-base font-normal 
  font-sans antialiased 
  text-base border-b-[1px] 
border-slate-200  hover:border-b-[1px]  
  hover:border-blue-500">{props.username}</h4>
<p className='p-0' >{props.status}</p></div></span>
    </div>
  )
}

export default RightSideBarUserCard
