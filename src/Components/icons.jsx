import React from 'react'
import Twitter from '../Twitter Icon.svg';
import Facebook from '../Facebook Icon.svg';
import Instagram from '../Instagram Icon.svg';
import Linkedin from '../Linkedin Icon.svg';
import Github from '../GitHub Icon.svg';


export default function Icons () {
  return (
    <div className='icons-box'>
      <div className='Social-media'>
        <a href="https://twitter.com/Abhipangotra1" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter logo" />
        </a>
        <a href="https://www.facebook.com/abhi.pangotra.6" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook logo" />
        </a>
        <a href="https://www.instagram.com/your-instagram-url" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram logo" />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-sharma-0b4013207/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/abhi7889" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="GitHub logo" />
        </a>
      </div>
    </div>
  )
}
