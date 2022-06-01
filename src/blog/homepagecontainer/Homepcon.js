import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import BlogPosts from '../../pages/BlogPosts'
const Homepcon = () => {
  return (
    <div>
        <Header />
         <div className='flex flex-row flex-wrap'><div className='flex flex-column flex-wrap'>
           <BlogPosts/> </div>
           {/* <Sidebar className='w-[200px]'/> */}
           </div>
           
    </div>
  );
}

export default Homepcon;
