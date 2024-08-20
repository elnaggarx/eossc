import React from 'react'
import "./WhyUsStyles.css"
import WhyUsCol from './WhyUsCol'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SummarizeIcon from '@mui/icons-material/Summarize';

const WhyUs = (props) => {
  return (
    <div className='why-us'>
        {props.english ? 
        <>
        <WhyUsCol  icon={<PsychologyIcon className='why-icon'></PsychologyIcon>} title="Expert Team" desc="Certified and experienced surveyors dedicated to quality and precision"></WhyUsCol>
        <WhyUsCol icon={<PhotoCameraIcon className='why-icon'></PhotoCameraIcon>} title="Advanced Technology" desc="State-of-the-art equipment for accurate results."></WhyUsCol>
        <WhyUsCol icon={<AccessAlarmIcon className='why-icon'></AccessAlarmIcon>} title="Timely Delivery" desc="Quick turnaround times to meet your project deadlines."></WhyUsCol>
        <WhyUsCol icon={<SummarizeIcon className='why-icon'></SummarizeIcon>} title="Comprehensive Reports" desc=" Detailed and easy-to-understand survey reports."></WhyUsCol>
        </>
        :
        <>
        <WhyUsCol  icon={<PsychologyIcon className='why-icon'></PsychologyIcon>} title="فريق متخصص" desc="مساحون معتمدون وذوو خبرة يكرسون أنفسهم للجودة والدقة"></WhyUsCol>
        <WhyUsCol icon={<PhotoCameraIcon className='why-icon'></PhotoCameraIcon>} title="تكنولجيا متقدمة" desc="معدات حديثة للحصول على نتائج دقيقة"></WhyUsCol>
        <WhyUsCol icon={<AccessAlarmIcon className='why-icon'></AccessAlarmIcon>} title="تسليم في الوقت المناسب" desc="أوقات تسليم سريعة لتلبية مواعيد المشاريع الخاصة بك."></WhyUsCol>
        <WhyUsCol icon={<SummarizeIcon className='why-icon'></SummarizeIcon>} title="تقارير شاملة" desc="تقارير مسح مفصلة وسهلة الفهم"></WhyUsCol>
        </>
        }
    </div>
  )
}

export default WhyUs
