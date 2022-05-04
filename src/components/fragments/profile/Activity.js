import React from 'react';

const Activity = () => {
  return (
    <div className='flex flex-row justify-evenly'>
      <div className='flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer'>
          <p>Personal</p>
          <hr></hr>
      </div>
      <div className='flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer'>
      <p>Favorites</p>
      <hr></hr>
      </div>
      <div className='flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer'>
      <p>Friends</p>
      <hr></hr>
      </div>
    </div>
  );
}

export default Activity;
