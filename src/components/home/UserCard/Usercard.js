import { Avatar } from '@mui/material'
import React from 'react'
import './usercard.css'

const Usercard = (props) => {
  return (
    <div className='usercard bg-gray-800'>
        <div className='usercard__top'>
        <Avatar aria-label="recipe" style={{
                     width:"60px",
                     height:"60px",
                     backgroundColor:"#42A5F5",
                     marginRight:"20px"
                     }}>
            {props.avatar}
          </Avatar>
          <div>
              <h3>{props.name}</h3>
              {/* <p>marshalyordanos32@gmail.com</p> */}
          </div>

        </div>
        <div className='usercard_des'>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Usercard