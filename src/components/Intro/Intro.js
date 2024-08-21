import React from 'react'
import "./IntroStyles.css";
import { motion } from 'framer-motion';
const Intro = (props) => {
    
    const array = "At EOSSC, we specialize in providing top-notch surveying services for residential, commercial, and industrial projects. Our team of certified professionals uses the latest technology to deliver accurate, reliable, and timely results.".split(" ");
    const arabicArray = "في المكتب المصري للخدمات والاستشارات المساحية، نحن نقدم خدمات مسح متقدمة للمشاريع السكنية، التجارية، والصناعية. فريقنا المتخصص من المهنيين المعتمدين يستخدم أحدث التقنيات لضمان تقديم نتائج دقيقة وموثوقة في الوقت المحدد".split(" ");


    return (
    <div className='intro'>
        {props.english && array.map((text,i)=><motion.span initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.1}}>{text} </motion.span>)}
        {!props.english && arabicArray.map((text,i)=><motion.span initial={{opacity:0}} className='align-right' whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.1}}>{text} </motion.span>)}
    </div>
  )
}

export default Intro 
