import React from 'react'
import styled from 'styled-components'
import EventImage from '../../../assets/page/event/jorka.png'
import { Navigate, Route, Routes,Link } from 'react-router-dom';
const EventCard = () => {
  return (
    <EventCardStyle >
       <div className='px-3 overflow-hidden'>
           <img src={EventImage} className="w-[70px] h-[70px] rounded-full object-fit" alt="" />
       </div>
       <div className='hover:text-white'>
           <h3 className=''>JORKA EVENTS</h3>
           <p>location and address</p>

       </div>
       <div className=' self-start bg-gray-200 hover:bg-blue-500 hover:ease-in-out duration:300 hover:cursor-pointer p-2 px-4 rounded-lg '>
            <Link to="/eventdetail/22"><p>Participate</p></Link>
       </div>
    </EventCardStyle>
  )
}
const EventCardStyle = styled.div`
   margin: 20px;
   display: flex;
   flex-direction: column;
   align-self:center;
   background-color: #ffffff;
   padding: 30px;
   width:250px;
   height: 300px;
   justify-content: space-around;
padding-left: 70px;
  /* box-shadow:  4px 4px 10px lightgray; */
  border-radius: 5px;
  :hover{
  box-shadow:  4px 4px 15px #b6b6b6;
background-color: #ffc400;
transition: all 0.5s ease-in-out;
color:white;
  }
   p,h3{
       margin: 0;
       padding: 0;
   }

`;
export default EventCard
