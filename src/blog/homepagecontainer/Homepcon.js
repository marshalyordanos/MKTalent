import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

const Homepcon = () => {
  return (
    <div>
        <Header />
         <div className='flex flex-row flex-wrap'><h1>there will be posts here</h1> <Sidebar/></div>
    </div>
  );
}

export default Homepcon;
