import React from 'react'
import "./SubHeadlineStyle.css"
const SubHeadline = (props) => {
  return (
    <div className='sub-headline'>
        {props.english ? 
        <>
        <h1 className='move-left'>Expert Land and Property Surveys to   </h1>
        <h1 className='move-right'>Accuaracy and Compliance</h1>
        </>
        :
        <>
        <h1 className='move-left'>خبراء مسوحات الأراضي و الممتلكات    </h1>
        <h1 className='move-right'>للتأكد من الدقة و الامتثال</h1>
        </>

        }
    </div>
  )
}

export default SubHeadline
