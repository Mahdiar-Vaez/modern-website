import React from "react";
import FeatureComponent from "../../feature/Feature";
import './gpt3.css'
export default function WhatGpt3() {
  return (
    <div id="wgpt3" className="gpt3__whatgpt3 section-margin">
      <div className="gpt3__whatgpt3-features">
        <FeatureComponent title={'What is GPT-3'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'}/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <FeatureComponent title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '}/>
        <FeatureComponent title={'Knowledgebase'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
        <FeatureComponent title={'Education' }text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
        
      </div>
    </div>
  );
}
