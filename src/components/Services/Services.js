import Card from "./Card.js"
import React from 'react'
import "./ServicesStyles.css"
import EngineeringIcon from '@mui/icons-material/Engineering';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Services = () => {
  return (
    <div className='services'>
        <h1 className='services-title'>Services</h1>
        <div className='services-cards-container'>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Land Surveys" desc="Comprehensive land assessments for development and legal purposes."></Card>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Property Surveys" desc="Detailed property boundary surveys and subdivision planning."></Card>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Construction Surveys" desc="Precise site planning and monitoring for construction projects."></Card>

        </div>
        <div className='services-cards-container'>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Topographic Surveys" desc="Mapping and analysis of land contours and features."></Card>
            <Card icon={<EngineeringIcon className='engineering-icon'></EngineeringIcon>} title="Utility Surveys" desc="Identification and location of underground utilities."></Card>
            <a href="#contact" className="services-cta-link">
            <div className="services-cta">
                <h4>Reserve a meeting now  </h4> <ChevronRightIcon></ChevronRightIcon>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Services
