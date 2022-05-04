import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../PostCard';

const Activity = () => {
  return (
    <div className='flex flex-row justify-evenly'>
      <div className='flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer'>
         <Link to="personal"> <p>Personal</p></Link>
          <hr></hr>
          <PostCard/>
          <PostCard/>

          <PostCard/>

          <PostCard/>


      </div>
      <div className='flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer'>
      <Link to="favourites"> <p>Favorites</p></Link>
      <hr></hr>
      </div>
      <div className='flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer'>
      <Link to="friends"><p>Friends</p></Link>
      <hr></hr>
      </div>
    </div>
  );
}

export default Activity;
