import React from 'react'
import hero from "../../assets/pxfuel.jpg"
import "./HeroStyles.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
    <div className='hero' id="home">
        <div className='hero-inner-container'>
            <img src={hero} alt="hero" className={props.english? 'hero-image' : "hero-image-inverted"}/>
            {props.english?
            <>
            <div className='hero-title'>
                <div className='title-1'><h1>The Egyptian Office</h1></div>
                <div className='title-2'><h2>For Surveying Services & Consultation</h2></div>
            </div>
            <div className='hero-sub'>
                <h3 className={selector===1?"selected":"unselected"}>We Measure</h3>
                <h3 className={selector===2?"selected":"unselected"}>We Plan</h3>
                <h3 className={selector===3?"selected":"unselected"}>We Map</h3>
                <h3 className={selector===4?"selected":"unselected"}>We Consult</h3>
                <h3 className={selector===5?"selected":"unselected"}>Trust Us</h3>
                <button className='hero-cta'>
                  <p>Why Us</p>
                  <KeyboardArrowDownIcon className='hero-cta-down'></KeyboardArrowDownIcon>
                </button>
            </div>
            </>
            :
            <>
            <div className='hero-title-inverted'>
                <div className='title-1-inverted'><h1>المكتب المصري</h1></div>
                <div className='title-2-inverted'><h2>للخدمات و الاستشارات المساحية</h2></div>
            </div>
            <div className='hero-sub-inverted'>
                <h3 className={selector===1?"selected":"unselected"}>نحن نقيس</h3>
                <h3 className={selector===2?"selected":"unselected"}>نحن نخطط</h3>
                <h3 className={selector===3?"selected":"unselected"}>نحن نرسم</h3>
                <h3 className={selector===4?"selected":"unselected"}>نحن نستشار</h3>
                <h3 className={selector===5?"selected":"unselected"}>ثقوا بنا</h3>

                <button className='hero-cta-inverted'>
                <KeyboardArrowDownIcon className='hero-cta-down'></KeyboardArrowDownIcon>
                    <p>لماذا نحن</p>
                </button>
            </div>
            </>
            }

        </div>
    </div>
  )
}

export default Hero
