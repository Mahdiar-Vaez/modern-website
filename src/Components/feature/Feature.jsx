import React from 'react'
import './feature.css'
export default function FeatureComponent({title,text}) {
  return ( 
    <div className='gpt3__features-container '>
        <div className='gpt3__features-container__features-title'>
          <div/>
          <h1>{title}</h1>
        </div>
        <div className='gpt3__features-container__features-text'>
          <p>{text}</p>
        </div>
    </div>
  )
}
