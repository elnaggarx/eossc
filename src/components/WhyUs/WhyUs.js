import React from 'react'
import "./WhyUsStyles.css"
import WhyUsCol from './WhyUsCol'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SummarizeIcon from '@mui/icons-material/Summarize';

const WhyUs = () => {
  return (
    <div className='why-us'>
        <WhyUsCol  icon={<PsychologyIcon className='why-icon'></PsychologyIcon>} title="Expert Team" desc="Certified and experienced surveyors dedicated to quality and precision"></WhyUsCol>
        <WhyUsCol icon={<PhotoCameraIcon className='why-icon'></PhotoCameraIcon>} title="Advanced Technology" desc="State-of-the-art equipment for accurate results."></WhyUsCol>
        <WhyUsCol icon={<AccessAlarmIcon className='why-icon'></AccessAlarmIcon>} title="Timely Delivery" desc="Quick turnaround times to meet your project deadlines."></WhyUsCol>
        <WhyUsCol icon={<SummarizeIcon className='why-icon'></SummarizeIcon>} title="Comprehensive Reports" desc=" Detailed and easy-to-understand survey reports."></WhyUsCol>
    </div>
  )
}

export default WhyUs
