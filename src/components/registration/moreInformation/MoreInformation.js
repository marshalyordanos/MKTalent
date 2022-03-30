import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './MoreInformation.css'
import Stepper from './stepper/Stepper'

const MoreInformation = () => {
  const light = useSelector(state=>state.mode.light)

  return (
    <div className={light?"moreInformation":"moreInformation__dark"}>
         {/* stepper div */}
         <div className='moreInformation__stepper'>
            <Stepper/>
         </div>

         {/* first step  */}
         <FirstStep/> 
  
    </div>
  )
}

const FirstStep = () => {
    const [val,setVal]=useState("")
    return (
      <div className='firstStep'>
          <h1>What's your goal with Mk-talent</h1> 
          <label>
          <p className={val==="one"?"firstStep__selecte":""}>Improve professional skills and knowledge</p> 
           <input onChange={(e)=>setVal(e.target.value)} type={"radio"} name="first" value={"one"}/>
          </label>
           
           <label>
           <p className={val==="two"?"firstStep__selecte":""}>Excel in school, or get ahead</p>
           <input onChange={(e)=>setVal(e.target.value)} type={"radio"} name="first" value={"two"} />

           </label>
           <label>
           <p className={val==="three"?"firstStep__selecte":""}>Generally stay sharp, improve, and have fun</p>
           <input onChange={(e)=>setVal(e.target.value)} type={"radio"} name="first" value={"three"}/>

           </label>
          <label>
          <p className={val==="four"?"firstStep__selecte":""}>Get the best learning tools for my students or children</p>
          <input onChange={(e)=>setVal(e.target.value)} type={"radio"} name="first" value={"four"}/>

          </label>
           <label>
           <p className={val==="five"?"firstStep__selecte":""}>Other</p>
           <input onChange={(e)=>setVal(e.target.value)} type={"radio"} name="first" value={"five"}/>

           </label>
           <NavLink to="/wws">Continue</NavLink>
      </div>
    )
  }
  const SecondStep = () => {
    return (
      <div className='secondStep'>
           {/* stepper div */}
           <div className='moreInformation__stepper'>
              <Stepper/>
           </div> 
    
      </div>
    )
  }
  const ThirdStep = () => {
    return (
      <div className='thirdStep'>
           {/* stepper div */}
           <div className='moreInformation__stepper'>
              <Stepper/>
           </div> 
    
      </div>
    )
  }

export default MoreInformation