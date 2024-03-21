import React from 'react'
import './article.css'
export default function Article({img,date,title}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={img} alt='blog' />
      </div>
      <div className='gpt3__blog-container_article-content'>
         <p>{date}</p>
         <h3>{title}</h3> 
         <p>Read Full Article</p>
      </div>
    
    </div>
  ) 
}
