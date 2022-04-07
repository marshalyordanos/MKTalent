import React from 'react'
import styled from 'styled-components'



// style={{border:"1px solid lightgray",width:props.width||"200px",backgroundColor:props.bgColor||"#",color:props.color||"white"}}
const Button = (props) => {
  return (
      <ButtonStyle >
       
            <button >{props.children}</button>
    </ButtonStyle>
  )
}

const ButtonStyle = styled.div`
    
   button{
    padding: 8px 10px;
    text-align: center;
    border-radius: 20px;
    border-radius: 1px solid lightgray;
    background-color:#1890FF ;
    width: 200px;
    color: white;
    font-size: 15px;
   }
   button:hover{
       background-color: white;
     color:#1890FF;
     border:1px solid #1890FF;
   }

`;



export default Button