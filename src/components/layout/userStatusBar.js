
import {useState} from 'react'
import RightSideBarUserCard from './RightSideBarUserCard';

function UserStatus() {
  const [page,setPage]=useState(1);
  const pageNewest=()=>{
    setPage(1);
  }
  const pageActive=()=>{
    setPage(2);
  }
  const pagePopular=()=>{
    setPage(3);
  }
  return (
    
    <div className=' box-content pb-4  bg-[#F6F0FC] w-[300px] rounded-xl'>
      
<h1 className=' py-2 pt-3 text-xl border-blue-500 w-[73px] border-b-2 mx-3 my-8 '>Members</h1>
<span className="flex flex-rows px-2">
<p className="text-base mx-3 hover:cursor-pointer
border-b-2  
border-slate-100 
hover:border-b-2  
  hover:border-blue-500" onClick={pageNewest}>Newest</p>|
   <p className="text-base mx-3 hover:cursor-pointer hover:border-b-2  
  hover:border-blue-500"onClick={pageActive}> Active</p>|
   <p className="text-base mx-3 hover:cursor-pointer hover:border-b-2  
  hover:border-blue-500" onClick={pagePopular}> Popular</p></span>
   {page==1 &&(<div>
 <RightSideBarUserCard username="John Doe" status="Registered two years ago"/>
 <RightSideBarUserCard username="John Doe" status="Registered two years ago"/>
 <RightSideBarUserCard username="John Doe" status="Registered two years ago"/>
 <RightSideBarUserCard username="John Doe" status="Registered two years ago"/>
 <RightSideBarUserCard username="John Doe" status="Registered two years ago"/>
 <RightSideBarUserCard username="John Doe" status="Registered two years ago"/>
 <RightSideBarUserCard username="John Doe" status="Registered two years ago"/>
 </div>
 
 )}
{page==2 &&(<div>  
<RightSideBarUserCard username="John Doe" status="two years ago"/>
 <RightSideBarUserCard username="John Doe" status="two years ago"/>
 <RightSideBarUserCard username="John Doe" status="two years ago"/>
 <RightSideBarUserCard username="John Doe" status="two years ago"/>
 <RightSideBarUserCard username="John Doe" status="two years ago"/>
 <RightSideBarUserCard username="John Doe" status="two years ago"/>
 <RightSideBarUserCard username="John Doe" status="two years ago"/>
 </div>
)} 

{page==3 &&(    <div> 
<RightSideBarUserCard username="John Doe" status="11 Friends"/>
<RightSideBarUserCard username="John Doe" status="11 Friends"/>
<RightSideBarUserCard username="John Doe" status="11 Friends"/>
<RightSideBarUserCard username="John Doe" status="11 Friends"/>
<RightSideBarUserCard username="John Doe" status="11 Friends"/>
<RightSideBarUserCard username="John Doe" status="11 Friends"/>
<RightSideBarUserCard username="John Doe" status="11 Friends"/>
</div> 
)}
  </div>
 
  );
}

export default UserStatus;
