import React from 'react'
import styled from 'styled-components'

const JobCatagory = () => {
  return (
    <JobCatagoryStyle className=''>
        <p>Administrative</p>
    </JobCatagoryStyle>
  )
}

const JobCatagoryStyle = styled.div`
   background-color: white;
   padding: 16px 30px;
   /* max-width: 250px; */
   /* min-width: 170px; */
   margin: 0px;
   border-radius: 7px;
   text-align: center;
   box-shadow: 1px 1px 5px lightgray;
   p{
     margin: 0;
   }

`;

export default JobCatagory