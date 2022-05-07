import React from 'react';
import Profile from '../../../assets/page/profile.png'
import {Link } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { useSelector } from "react-redux";
const PeopleSearchCard = () => {

    const FGstatus=(props)=>{
        return(
        <div className="self-center flex flex-column">
<p className="self-center px-8">{props.number}</p>
<p className="self-center">{props.label}</p>
</div>
)
    }
    const { data: userData } = useSelector((state) => state.userAuth);
  return (
    <div className="flex flex-column item-center my-8 mx-12 px-4 shadow-md rounded-xl w-[250px]">
     <div className="flex flex-row self-center"> <img src={Profile} className="my-2  
     self-center bg-contain bg-center h-14 w-14 object-cover rounded-3xl"/>{userData.token &&( <PersonAddIcon className="mt-10"/>)}</div> 
      <h1 className="flex flex-column self-center">John Doe</h1>
      <p className=" self-center">Active 1 minute ago</p>
     <div className="flex flex-rows  self-center">
        <FGstatus className="mx-4 my-8" number="0" label="Friends"/> <FGstatus number="0" label="Likes"/>
         </div>
         {userData.token &&( <Link to="/profile/ijnj"><button className=" self-center border-purple-600 box-content border-2 w-[200px] rounded-3xl h-[35px] mb-3 text-purple-600 hover:bg-purple-600 hover:text-white hover:duration-700">
    View Profile</button></Link>)}
    </div>
  );
}

export default PeopleSearchCard;
