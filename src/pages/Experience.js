import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2013-15' iconStyle={{background :'#3e497a', color:'#fff' }} icon={<SchoolIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>St. Joseph Matriculation Higher Secondary School</h3> 
           <p>SSLC</p>
           <p>94%</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2015-17' iconStyle={{background :'#3e497a', color:'#fff' }} icon={<SchoolIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>Maharishi Vidya Mandir</h3> 
           <p>HSC</p>
           <p>75%</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2017-21' iconStyle={{background :'#3e497a', color:'#fff' }} icon={<SchoolIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>Excel Engineering College</h3> 
           <p>Bachelor of Computer Science and Engineering</p>
           <p>7.7 cgpa</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2022-22' iconStyle={{background :'#e9d35b', color:'#fff' }} icon={<WorkIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>Nittany Creative Services</h3> 
           <p>Client co-ordinator</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2023-Present' iconStyle={{background :'#e9d35b', color:'#fff' }} icon={<WorkIcon/>}>
           <h3 className='vertical-timeline-eleent-title'>Schneider Electric</h3> 
           <p>Associate Method Engineer</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    
    </div>
  )
}

export default Experience
