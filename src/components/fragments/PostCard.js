import React from 'react'
import RightSideBarUserCard from '../layout/RightSideBarUserCard'
import Postimg from '../../assets/page/profile.png'
import {useState} from 'react'

import Comment from './Comment'
const PostCard = (props) => {

const [comment,setComment]=useState(true)
  return (
    <div className=" box-content  w-[500px] p-4 justify-start overflow-hidden">
   <RightSideBarUserCard username="John Doe" 
   status="7 hours, 57 minutes ago"/>
<div className=" px-9">
   <h1 className="text-ellipsis text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, harum quisquam. Consequuntur et harum fugiat laborum deleniti quis autem. Deleniti nihil accusamus unde assumenda. Iusto quia autem officia porro vitae?</h1>
   <div className="    w-[500px] overflow-hidden">
     <img src={Postimg} alt="there should have been a post here"
      className="my-2 bg-contain
      bg-center object-cover transform
      rounded 
      hover:scale-150 transition duration-1000
     "/>
  
     </div>
     <div>

     <Comment comment="Very cool Post!" username="John Doe" status="commented 2 minutes ago"/>
    
  
     </div>
   </div>
   </div>
  )
}



export default PostCard