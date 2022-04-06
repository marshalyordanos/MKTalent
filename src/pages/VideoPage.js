import React from 'react'
import VideoCard from '../components/fragments/VideoCard'
import { Input } from 'antd';
import styled from 'styled-components'

const { Search } = Input;
const VideoPage = () => {
  return (
    <Videopage1 className=''>
      <div className=' border-b-[1px] mx-7 border-[#e7e7e7]'>
       <p className='text-lg mt-10 pb-0 border-b-[3px] w-20 border-[#1890FF]  mb-0'>All Videos</p>    
      </div>  
      <div className='vedioSearch w-60 mt-7 pb-7 mx-7'>
      <Search  placeholder="search vedio" loading={false} enterButton  />
      </div>  
      <hr className='ml-7 mr-7 border-[#e7e7e7] '/>
      <div className='flex flex-wrap justify-evenly'>
      <VideoCard/> 
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      </div>
    </Videopage1>
  )
}

const Videopage1 = styled.div`
 
  .vedioSearch input:focus{
     outline: none;
  }

`;

export default VideoPage