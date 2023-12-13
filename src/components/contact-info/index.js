import React from "react";

import profile from '../../utils/images/portfolio.jpg';
import facebook from '../../utils/images/Facebook.png';
import LinkedIn from '../../utils/images//Linkedin.png';
import twitter from '../../utils/images/Twitter.png';
import github from '../../utils/images/Github.png';
import phone from '../../utils/images/phone.png';
import location from '../../utils/images/Location (1).png';
import email from '../../utils/images/Email.png';
import download from '../../utils/images/Download Details.png';
import Resume from '../../utils/CV - Afaq Khan - 23-WI.pdf';

import './style.css';

const ContactInfo = () => {

  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch(Resume).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Afaq-Khan-resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className="contact">
      <img width="150px" className="profileImage" height="150px" src={profile} alt="profile" />
      <div className="contectDetail">
        <div className="info">
          <h4 className="name">Afaq Khan</h4>
          <span className="stack">FullStack Developer</span>
        </div>
        <div className="icons">
          <img
            width="50px"
            className="cursor-pointer"
            src={facebook}
            alt="facebook"
            onClick={() => window.open('https://www.facebook.com/afaq.afaqkhan.5815?mibextid=ZbWKwL', '_blank')}
          />
          <img
            width="50px"
            className="cursor-pointer"
            src={LinkedIn}
            alt="LinkedIn"
            onClick={() => window.open('https://www.linkedin.com/in/afaqkhan301', '_blank')}
          />
          <img
            width="50px"
            className="cursor-pointer"
            src={twitter} alt="twitter"
          />
          <img
            width="50px"
            className="cursor-pointer"
            src={github} alt="github"
            onClick={() => window.open('https://github.com/Afaq499', '_blank')}
          />
        </div>
        <div className="personel">
          <div className="contactInfo">
            <img width=" 30px" src={phone} alt="profile" />
            <div>
              <span style={{ paddingTop: '7px', fontSize: '15px', color: 'silver' }}>Phone</span><br />
              <span style={{ fontSize: '12px' }}>+923030949729</span>
            </div>
          </div>
          <hr />
          <div className="contactInfo">
            <img width=" 30px" src={email} alt="email" />
            <div className="contact-email">
              <span style={{ paddingTop: '7px', fontSize: '15px', color: 'silver' }}>Email</span><br />
              <span style={{ fontSize: '14px' }}>afaqahmadkhan499@gmail.com</span>
            </div>
          </div>
          <hr />
          <div className="contactInfo">
            <img width=" 30px" src={location} alt="location" />
            <div>
              <span style={{ paddingTop: '7px', fontSize: '15px', color: 'silver' }}>Location</span><br />
              <span style={{ fontSize: '14px' }}>Lahore,Pakistan</span>
            </div>
          </div>
          <hr />
          <div className="downloadResume">
            <img
              width="160px"
              height="45px"
              className="cursor-pointer"
              src={download} alt="download"
              onClick={() => downloadResume()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;
