import React from 'react'
import RightSideBarUserCard from '../layout/RightSideBarUserCard'
import Postimg from '../../assets/page/profile.png'
const PostCard = (props) => {

  return (
    <div className=" box-content  w-[500px] p-4 justify-start overflow-hidden">
   <RightSideBarUserCard username="John Doe" 
   status="7 hours, 57 minutes ago"/>
<div className=" px-9">
   <h1 className="text-ellipsis text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, harum quisquam. Consequuntur et harum fugiat laborum deleniti quis autem. Deleniti nihil accusamus unde assumenda. Iusto quia autem officia porro vitae?</h1>
   <div className=" border-2   w-[500px] overflow-hidden">
     <img src={Postimg} alt="there should have been a post here"
      className="my-2 bg-contain
      bg-center object-cover transform
      rounded 
      hover:scale-150 transition duration-700
     "/>
     </div>
   </div>
   </div>
  )
}

export default PostCard