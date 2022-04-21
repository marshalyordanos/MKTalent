import React from 'react';
import styled from 'styled-components'
import EventCard from './EventCard'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FaceBook from '../../../assets/page/event/Facebook.svg.png'
import Instagram from '../../../assets/page/event/instagram.jpg'
import Telegram from '../../../assets/page/event/telegram.png'
import EventIcon from '@mui/icons-material/Event';

import Button from '../../../utils/Button';
const EventDetail = () => {
    const pra = [
        "Fundraising proceeds will directly support Reel Asian’s year-round and festival youth programs that help culturally diverse and newcomer youth from the GTA examine issues of identity and belonging through media arts, while providing leadership opportunities, education and job-skills training in film and creative production",

    ]
    const locationandduration = [
        "Big Sean will at the hmv Underground at Beherawi Theater around giorgis on March 24, 2015 at 5:00 PM for an exclusive FAN MEET & GREET. Space is limited to the first 300 fans on a first come first served basis (as per the event protocol).",
      
    ]
    const targetaudience = [
        "Anyone with interest.",
        "Looking to expand their network and make connections.",
        "Aspiring Models are recommended to attend .",
        "Additional related experience beneficial."
    ]
    const incollaborationwith = [
        "Ghion.",
        "Dashen Bank.",
        "Choo choo .",
   
    ]
    const share = [
       <img src={ FaceBook} className="w-8"/>,
       <img src={ Instagram} className="w-12"/>,
       <img src={ Telegram}className="w-8"/>,

    ]
  return (
    <EventDetailStyle>
        <EventCard/>
        <div className='eventDetail__type text-gray-500'>
            <div className='eventDetail__type1 '>
                <div className='a1'>
                <EventIcon/>
                <span className='pl-3'>Event Type</span>
                </div>
                <span>Conference</span>
            </div>
            <div className='eventDetail__type2' >
                <div className='a2'>
                <FmdGoodOutlinedIcon/>
                <span className='pl-3'>Location</span>
                </div>
                <span> Beherawi Theater around giorgis, Addisababa</span>
            </div>
            
       
        </div>
        <div className='eventDetail__pra'>
            <h3>Event Description:</h3>
        {
                pra.map(v=><p>{v}</p>)
            }
        </div>
        <div className="eventdetail__response">
            <h3>Location and Duration:</h3>
            {
                locationandduration.map(v=><li>{v}</li>)
            }
        </div>
        <div className="eventdetail__list">
            <h3>Target Audience :</h3>
            {
                targetaudience.map(v=><li>{v}</li>)
            }
        </div>
        <div className="eventdetail__list">
            <h3>Incollaboration with:</h3>
            {
                incollaborationwith.map(v=><li>{v}</li>)
            }
        </div>
        <div className="eventdetail__list">
            <h3>Share :</h3>
            {
                <div className="flex px-4 flex-row self-end">{share.map(v=><div>{v}</div>)}</div>
            }
        </div>

        <div className='m-[20px]'>
        <Button >Participate</Button>

        </div>

        <div className='eventdetail__events'>
            <h2>Related Events</h2>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>

        </div>



        
    </EventDetailStyle>
  );
}



const  EventDetailStyle = styled.div`
     .eventDetail__type{
         margin: 20px;
         border-radius: 7px;
         border: 1px solid lightgray;
     }
     .eventDetail__type1{
         padding: 14px;
         border-bottom: 1px solid lightgray;
     }
     .eventDetail__type2{
         padding: 14px;
     }
     .eventDetail__type div{
         display: flex;
         align-items: center;

     }
     .eventDetail__type1 > div{
         width: 40%;
         font-size: 16px;
     }
     .eventDetail__type2 > div{
         width: 40%;
         font-size: 16px;
     }

/* jobDetail__pra */
.eventDetail__pra{
    margin: 20px;
    font-size: 15px;
}
/* jobdetail__response */
.eventdetail__response{
    margin: 20px;
}
.eventdetail__response li{
    font-size: 15px;
    margin: 4px;
}
/* jobdetail__list */
.eventdetail__list{
    margin: 20px;
}
.eventdetail__list li{
    font-size: 15px;
    margin: 4px;
}


/* eventdetail__events */
.eventdetail__events{
    
}
.eventdetail__events h2{
    padding-top: 35px;
    margin: 25px;
    border-bottom: 1px solid lightgray;
   
}

`;


export default EventDetail;
