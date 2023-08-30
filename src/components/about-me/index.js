import React from "react";

import App from '../../utils/images/App.png';
import code from '../../utils/images/code icon.png'
import mentor from '../../utils/images/Mentor icon.png';

const AboutMe = () => {
    return (
        <div id="aboutme" className="aboutme">
        <div style={{ paddingLeft: '52px', 'paddingTop': '1px' }}>
          <h1 style={{ fontSize: '30px' }}>About Me</h1>
          <p style={{ paddingLeft: 'px', fontSize: '20px' }}>
            Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile<br />
            full-stack developer with a keen interest in exploring the latest cutting-edge technologies.<br />
            My journey in the world of web development has been nothing short of exhilarating, and <br />
            I constantly strive to enhance my skills and embrace emerging trends in the industry.
          </p>
          <h2>What I do!</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '92%' }}>
            <div style={{ width: '47%', height: '35%', backgroundColor: 'bisque', border: '0px solid', borderRadius: '10px' }}>
              <img style={{ paddingTop: '8px', paddingLeft: '15px' }} src={code} alt="code" />
              <span style={{ fontSize: '23px', paddingLeft: '8px' }}><b>Web Development</b></span><br />
              <p className="project-info">
                As a developer, I find myself most
                captivated by the power and flexibility of
                NEXT.js. I'm always eager to dive into new
                projects that leverage NEXT.js and
                discover innovative ways to create fast,
                scalable, and user-friendly applications.
              </p>
            </div>
            <div className="app-dev">
              <img className="app-dev-img" src={App} alt="app" />
              <span className="dev-text"><b>App Development</b></span><br />
              <p className="project-info">
                With a focus on user-centric design and
                cutting-edge technologies, I thrive on
                building intuitive and efficient apps
                that make a positive impact on people's
                lives. Let's turn ideas into reality and ss
                shape the future together.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '15px', width: '92%' }}>
            <div className="ui-dev">
              <img className="app-dev-img" src={App} alt="app" />
              <span className="dev-text"><b>UI/UX Designing</b></span><br />
              <p style={{ marginRight: '16px', marginLeft: '13px', height: '71px' }}>
                Crafting visually appealing and intuitive user
                interfaces that offer a delightful user
                experience is something I'm truly fanatic
                about.
              </p>
            </div>
            <div className="app-dev-text">
              <img className="app-dev-img" src={mentor} alt="mentor" />
              <span className="dev-text"><b>App Development</b></span><br />
              <p className="project-info">
                I have also found great joy in sharing my
                knowledge with others. Being a technical
                mentor allows me to give back to the
                community that has supported me
                throughout my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutMe;
