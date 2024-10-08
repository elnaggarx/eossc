import Card from "./Card.js"
import React from 'react'
import "./ServicesStyles.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LandscapeIcon from '@mui/icons-material/Landscape';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FoundationIcon from '@mui/icons-material/Foundation';
import ImageIcon from '@mui/icons-material/Image';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Services = (props) => {
  return (
    <div className='services' id="services">
        {props.english ? <h1 className='services-title'>Services</h1> : <h1 className="services-title">خدماتنا</h1> }
        <div className='services-cards-container'>
            {props.english ? <>
            <Card icon={<ImageIcon className='engineering-icon'></ImageIcon>} title="Land Surveys" desc="Comprehensive land assessments for development and legal purposes."></Card>
            <Card icon={<CorporateFareIcon className='engineering-icon'></CorporateFareIcon>} title="Property Surveys" desc="Detailed property boundary surveys and subdivision planning."></Card>
            <Card icon={<FoundationIcon className='engineering-icon'></FoundationIcon>} title="Construction Surveys" desc="Precise site planning and monitoring for construction projects."></Card>

    
            <Card icon={<LandscapeIcon className='engineering-icon'></LandscapeIcon>} title="Topographic Surveys" desc="Mapping and analysis of land contours and features."></Card>
            <Card icon={<AddHomeWorkIcon className='engineering-icon'></AddHomeWorkIcon>} title="Utility Surveys" desc="Identification and location of underground utilities."></Card>
            <a href="#contact" className="services-cta-link">
            <div className="services-cta">
                <h4>Reserve a meeting now  </h4> <ChevronRightIcon></ChevronRightIcon>
            </div>
            </a>
            </>
            :
            <>
            <Card reversed={true} icon={<ImageIcon className='engineering-icon'></ImageIcon>} title="مسوحات الاراضي" desc="تقييم شامل للأراضي لأغراض التطوير والتقارير القانونية"></Card>
            <Card reversed={true} icon={<CorporateFareIcon className='engineering-icon'></CorporateFareIcon>} title="مسوحات العقارات" desc="مسوحات دقيقة لحدود العقارات وتخطيط التقسيم"></Card>
            <Card reversed={true} icon={<FoundationIcon className='engineering-icon'></FoundationIcon>} title="مسوحات البناء" desc="تخطيط ومراقبة دقيقة لمواقع المشاريع الإنشائية"></Card>
            <Card reversed={true} icon={<LandscapeIcon className='engineering-icon'></LandscapeIcon>} title="المسوحات الطبوغرافية" desc="رسم وتحليل التضاريس وميزات الأرض"></Card>
            <Card reversed={true} icon={<AddHomeWorkIcon className='engineering-icon'></AddHomeWorkIcon>} title="مسوحات المرافق" desc="تحديد مواقع المرافق تحت الأرض بدقة."></Card>
            <a href="#contact" className="services-cta-link">
            <div className="services-cta-reversed">
                <ChevronLeftIcon></ChevronLeftIcon>
                <h4>احجز مقابلتك الآن</h4> 
            </div>
            </a>
            </>
            }
        </div>
    </div>
  )
}

export default Services
