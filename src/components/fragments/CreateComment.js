import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Profile from '../../assets/page/profile.png'
import {IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const CreateComment = ({comments,setComments}) => {

    const [comment,setComment]=useState('');
    function handleComment(evt){
        setComment(evt.target.value)
    }
    function handleCreateComment () {
        const newComment = { comment }
        setComments([ newComment, ...comments ])
     }
  return(<div>
      <PlaceHolder className="flex flex-row">
   <img src={Profile} className="my-3 mx-3 bg-contain
    bg-center h-9 w-9
     object-cover rounded-3xl"/>
<form className='flex flex-row'>
    <input type="text" className="my-3 rounded-xl 
    bg-slate-200 w-[300px] h-[35px]" 
    placeholder="Write your comment here" 
    value={comment} onChange={handleComment}/>
    </form>
    <IconButton className="mx-2 my-3" onClick={e=>{e.preventDefault(); handleCreateComment()}}><SendIcon size={"small"} /></IconButton>
    </PlaceHolder>
    {/*  */}
    {/* <p className="my-1 mx-14">{comment}</p> */}
      </div>
    )
    }

const PlaceHolder= styled.div`

input::placeholder{
  padding-left:10px;
}
input{
  padding-left:20px;
}
`
export default CreateComment;