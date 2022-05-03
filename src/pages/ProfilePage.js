import React from 'react';
import ProfBg from '../../assets/page/MK logo/probg.jpeg'
import Prof from '../../assets/page/profile.png'
const ProfilePage = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap h-[200px]'><img className="" src={ProfBg}/></div>
      <div className='flex flex-wrap w-[200px] ml-8 mt-[160px] '><img className='rounded-xl' src={Prof}/></div>
    </div>
    
  );
}

export default ProfilePage;
