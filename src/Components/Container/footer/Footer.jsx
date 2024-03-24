import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { GenIcon } from 'react-icons';
import { CiInstagram } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='footer-title'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className='footer-ul'>
        <div className='title'>
          <h2>GPT_3</h2>
          <p>Made by Mahdiyar Vaez, All Rights Reserved</p>
        </div>
        <ul>
          <h3>Links</h3>
          <li>item</li>
          <li>item</li>
          <li>item</li>
       
        </ul>
        <ul>
          <h3>Company</h3>
          <li>item</li>
          <li>item</li>
          <li>item</li>
     
        </ul>
        <ul>
          <h3>Contact</h3>
          <li>989056375314</li>
          <li>mahdyarvaez@gmail.com</li>
          <li ><FaGithub/></li>
          <li >
          https://github.com/Mahdiar-Vaez
          </li>
          <li><CiInstagram/></li>
          <li>https://www.instagram.com/mahdiarvaez/</li>
          <li><FaTelegram/></li>
          <li>https://t.me/MAHDIARVAEZ</li>

        </ul>
      </div>
    </div>
  )
}
