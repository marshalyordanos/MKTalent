import React from 'react'
import styled from 'styled-components'
import EventImage from '../../../assets/page/event/jorka.png'
const EventCard = () => {
  return (
    <EventCardStyle >
       <div className='px-3 overflow-hidden'>
           <img src={EventImage} className="w-[70px] h-[70px] rounded-full object-fit" alt="" />
       </div>
       <div className='flex-grow'>
           <h3>JORKA EVENTS</h3>
           <p>location and address</p>

       </div>
       <div className=' self-start bg-gray-200 p-2 px-4 rounded-lg '>
            <p>Participate</p>
       </div>
    </EventCardStyle>
  )
}
const EventCardStyle = styled.div`
   margin: 20px;
   display: flex;
   align-items: center;
   background-color: #ffffff;
   padding: 30px;
  /* box-shadow:  4px 4px 10px lightgray; */
  border-radius: 5px;
  :hover{
  box-shadow:  4px 4px 15px #b6b6b6;

  }
   p,h3{
       margin: 0;
       padding: 0;
   }

`;
export default EventCard
