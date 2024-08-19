import React from 'react'
import hero from "../../assets/pxfuel.jpg"
import "./HeroStyles.css"
import { useEffect,useState } from 'react'
const Hero = () => {
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
            </div>
        </div>
    </div>
  )
}

export default Hero
