import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import BlogPosts from '../../pages/BlogPosts'
const Homepcon = () => {
  return (
    <div>
        <Header />
         <div className='flex flex-row flex-wrap'>
           <BlogPosts/> </div>
           {/* <Sidebar/> */}
    </div>
  );
}

export default Homepcon;
