import React from 'react';
import ProfBg from '../assets/page/MK logo/probg.jpeg'
import Prof from '../assets/page/profile.png'
import Activity from '../components/fragments/profile/Activity';
import ProfileFrag from '../components/fragments/profile/ProfileFrag';
const ProfilePage = () => {
  return (
    <div className='flex flex-col'>
      <Activity/>
      {/* <ProfileFrag/> */}
    </div>
    
  );
}

export default ProfilePage;
