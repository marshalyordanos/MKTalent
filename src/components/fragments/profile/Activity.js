import React from 'react';

const Activity = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-row flex-wrap hover:bg-purple-500'>
          <p>Personal</p>
      </div>
      <div className='flex flex-row flex-wrap hover:bg-purple-500'>
      <p>Favorites</p>
      </div>
    </div>
  );
}

export default Activity;
