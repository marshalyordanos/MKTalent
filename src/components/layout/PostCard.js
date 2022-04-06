import React from 'react'
import RightSideBarUserCard from './RightSideBarUserCard'
import Postimg from '../../assets/page/profile.png'
const PostCard = (props) => {
  return (
    <div>
   <RightSideBarUserCarderCard username="John Doe"  status="7 hours, 57 minutes ago"/>
   <h1 className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, harum quisquam. Consequuntur et harum fugiat laborum deleniti quis autem. Deleniti nihil accusamus unde assumenda. Iusto quia autem officia porro vitae?</h1>
   <img src={Postimg} alt="there should have been a post here" className="my-2 bg-contain bg-center h-9 w-9 object-cover rounded"/>
   </div>
  )
}

export default PostCard