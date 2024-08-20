import React from 'react'
import hero from "../../assets/pxfuel.jpg"
import "./HeroStyles.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect,useState } from 'react'
const Hero = (props) => {
  const [selector,setSelector] = useState(1);
  useEffect(()=>{
    const interval = setInterval(()=>{
      handleSelector();
      
      return clearInterval(interval)
    },4000);
  });
  const handleSelector=()=>{
    if(selector===5){
      setSelector(1);
      
    }
    else{
      setSelector(selector+1)
    }
  }
  return (
    <div className='hero'>
        <div className='hero-inner-container'>
            <img src={hero} alt="hero" className='hero-image'/>
            {props.english?
            <>
            <div className='hero-title'>
                <div className='title-1'><h1>The Egyptian Office</h1></div>
                <div className='title-2'><h2>For Surveying Services & Consultation</h2></div>
            </div>
            <div className='hero-sub'>
                <h3 className={selector===1?"selected":"unselected"}>We Survey</h3>
                <h3 className={selector===2?"selected":"unselected"}>We Analyze</h3>
                <h3 className={selector===3?"selected":"unselected"}>We Guarantee Safety</h3>
                <h3 className={selector===4?"selected":"unselected"}>We Survey</h3>
                <h3 className={selector===5?"selected":"unselected"}>We Analyze</h3>
                <div className='hero-cta'>
                  <p>Why Us</p>
                  <a href="#whyus"><div className='down-arrow-container'><ArrowDownwardIcon className='down-arrow'></ArrowDownwardIcon></div></a>
                </div>
            </div>
            </>
            :
            <>
            <div className='hero-title'>
                <div className='title-1 title-1-invert'><h1>المكتب المصري</h1></div>
                <div className='title-2 title-2-invert'><h2>للخدمات و الاستشارات المساحية</h2></div>
            </div>
            <div className='hero-sub hero-sub-invert'>
                <h3 className={selector===1?"selected":"unselected"}>نحن نستطلع</h3>
                <h3 className={selector===2?"selected":"unselected"}>نحن نحلل</h3>
                <h3 className={selector===3?"selected":"unselected"}>نحن نضمن السلامة</h3>
                <h3 className={selector===4?"selected":"unselected"}>نحن نستطلع</h3>
                <h3 className={selector===5?"selected":"unselected"}>نحن نحلل</h3>
                <div className='hero-cta'>
                  <p>لماذا نحن</p>
                  <a href="#whyus"><div className='down-arrow-container'><ArrowDownwardIcon className='down-arrow'></ArrowDownwardIcon></div></a>
                </div>
            </div>
            </>
            }

        </div>
    </div>
  )
}

export default Hero
