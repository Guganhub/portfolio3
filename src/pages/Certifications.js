import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import 'react-vertical-timeline-component/style.min.css'
import AssignmentIcon from '@mui/icons-material/Assignment';

const Certifications = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022-present' iconStyle={{background :'#3e497a', color:'#fff' }} icon={<AssignmentIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>Full Stack Development Course</h3> 
           
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2020' iconStyle={{background :'#3e497a', color:'#fff' }} icon={<AssignmentIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>SIH Internal Hackathon</h3> 
           
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2019' iconStyle={{background :'#3e497a', color:'#fff' }} icon={<AssignmentIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>Core Concepts in JAVA</h3> 
           

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018' iconStyle={{background :'#3e497a', color:'#fff' }} icon={<AssignmentIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>Workshop on Android</h3> 
          

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018' iconStyle={{background :'#3e497a', color:'#fff' }} icon={<AssignmentIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>Inplant Training in Web Development</h3> 
           

        </VerticalTimelineElement>
      </VerticalTimeline>
    
    </div>
    
  )
}

export default Certifications
