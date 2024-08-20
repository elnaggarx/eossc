import Card from "./Card.js"
import React from 'react'
import "./ServicesStyles.css"
import EngineeringIcon from '@mui/icons-material/Engineering';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Services = (props) => {
  return (
    <div className='services'>
        {props.english ? <h1 className='services-title'>Services</h1> : <h1 className="services-title">خدماتنا</h1> }
        <div className='services-cards-container'>
            {props.english ? <>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Land Surveys" desc="Comprehensive land assessments for development and legal purposes."></Card>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Property Surveys" desc="Detailed property boundary surveys and subdivision planning."></Card>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Construction Surveys" desc="Precise site planning and monitoring for construction projects."></Card>

    
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Topographic Surveys" desc="Mapping and analysis of land contours and features."></Card>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Utility Surveys" desc="Identification and location of underground utilities."></Card>
            <a href="#contact" className="services-cta-link">
            <div className="services-cta">
                <h4>Reserve a meeting now  </h4> <ChevronRightIcon></ChevronRightIcon>
            </div>
            </a>
            </>
            :
            <>
            <Card reversed={true} icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="مسوحات الاراضي" desc="تقييمات شاملة للأراضي لأغراض التطوير والقانونية"></Card>
            <Card reversed={true} icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="مسوحات الممتلكات" desc="مسوحات دقيقة لحدود العقارات وتخطيط التقسيم"></Card>
            <Card reversed={true} icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="مسوحات البناء" desc="تخطيط ومراقبة دقيقة لمواقع المشاريع الإنشائية"></Card>

    
            <Card reversed={true} icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="المسوحات الطبوغرافية" desc="رسم وتحليل تضاريس وميزات الأرض"></Card>
            <Card reversed={true} icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="مسوحات المرافق" desc="تحديد وتحديد مواقع المرافق تحت الأرض"></Card>
            <a href="#contact" className="services-cta-link">
            <div className="services-cta services-cta-reversed">
                <h4>احجز مقابلتك الآن</h4> <ChevronRightIcon></ChevronRightIcon>
            </div>
            </a>
            </>
            }
        </div>
    </div>
  )
}

export default Services
