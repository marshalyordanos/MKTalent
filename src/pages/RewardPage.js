import React from 'react'
import RewardCard from '../components/fragments/RewardCard'
import styled from 'styled-components'
const RewardPage = () => {
  return (
    <RewardPageStyled>
        <RewardCard/>
        <RewardCard/>
        <RewardCard/>
        <RewardCard/>
        <RewardCard/>
        <RewardCard/>

    </RewardPageStyled>
  )
}

const RewardPageStyled = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;

`;

export default RewardPage