import React from 'react'
import RightSideBarUserCard from './RightSideBarUserCard'
import Postimg from '../../assets/page/profile.png'
const PostCard = (props) => {
  return (
    <div className=" box-content justify-start">
   <RightSideBarUserCard username="John Does" 
   status="7 hours, 57 minutes ago"/>
<div className=" px-9">
   <h1 className="text-ellipsis text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, harum quisquam. Consequuntur et harum fugiat laborum deleniti quis autem. Deleniti nihil accusamus unde assumenda. Iusto quia autem officia porro vitae?</h1>
   <img src={Postimg} alt="there should have been a post here"
    className="my-2 bg-contain
     bg-center object-cover 
     rounded h-50"/>
   </div>
   </div>
  )
}

export default PostCard