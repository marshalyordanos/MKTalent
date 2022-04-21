import { SearchOutlined } from '@mui/icons-material'
import { style } from '@mui/system'
import { Button, Checkbox } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import FilterListIcon from '@mui/icons-material/FilterList';
import JobCard from '../components/fragments/job/JobCard'
import JobCatagory from '../components/fragments/job/JobCatagory'
import EventCard from '../components/fragments/event/EventCard'
const EventPage = () => {
    const [showFilter,setShowFilter]=useState(false)

  return (
    <EventPageStyle>
        {/* ********** header */}
       <div className='header flex items-center justify-between text-base m-4'>
           <NavLink  to="#">All Events</NavLink>
           


       </div>
       
      
       
       <div clasName="flex flex-column" >
          <div className='flex flex-wrap justify-evenly '>
            <EventCard/>
           <EventCard/>
           <EventCard/>

         <EventCard/>
           <EventCard/>
           <EventCard/>
           </div>

       </div>

    </EventPageStyle>
  )
}








const EventPageStyle = styled.div`
  

  /* ******** top header  */

  .header{
      
      border-bottom: 1px solid lightgray;
  }
  .header a{
    color: black;
    padding: 14px;
  }
  .header a:hover{
    color:#1890FF ;
  }
  .header .active:hover{
    color:black ;
  }
  .header .active{
    background-color:#E6F7FF ;
  }
  .header span{
    padding: 14px;
    background-color: #1890FF;
    color: white;
      border: 1px solid lightgray;
      cursor: pointer;
      user-select: none;
  }
  .header span:hover{
    border: 1px solid #1890FF;
    background-color: #FAFAFA;
    color: black;
/* 0915870708 */

    
  }

/* header Bottem */
.header__bottem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 16px ;
    cursor: pointer;

    border-bottom: 1px solid lightgray;
}
.header__bottem__one input{
 padding: 8px 14px;
 border: 1px solid lightgray;
 border-radius: 20px;
 margin: 19px 3px;
}
 .header__bottem__one input:focus,.header__bottem__two:hover{
    border: 1px solid #1890FF;
    outline: none;
}
 .header__bottem__two {
    display: flex;
    justify-content: center;

    align-items: center;
    width: 150px;
    border: 1px solid lightgray;
    padding: 8px 12px;
    border-radius: 20px;
}

/* job filter */

.JobPage__filter {
    padding: 10px;
    padding-bottom:40px;
    border-bottom: 1px solid lightgray;
}

`;

export default EventPage