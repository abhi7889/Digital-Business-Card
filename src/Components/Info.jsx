import React from "react";
import '../Components/Style.css';
import Mail from '../Mail.svg';

export default function Info() {
  const email = 'your-email@example.com';


  return (
    <div className="detail-box">
      <div className="my-img"></div>
      <div className="my-details">
        <div className="name">Abhishek Sharma</div>
        <div className="role">Frontend Developer</div>
        <div className="website">github.com/abhi7889</div>
        <div className="email-btn">
          <a href={`mailto:${email}`} className="email-link">
            <img src={Mail} alt="mail-logo" className="email-icon" />
            <div className="email-txt">Email</div>
          </a>
        </div>
      </div>
    </div>
  );
}

