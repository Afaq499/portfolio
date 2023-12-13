import React, { useState, useEffect } from "react";

import CustomModal from "../modal";

import { workHistory } from "../../utils/constants";

const Work = () => {
  const [projects, setProjects] = useState(workHistory)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectInfo, setProjectInfo] = useState({});
  const [active, setActive] = useState('All');

  const handleTabChange = (value) => {
    setActive(value);
    if (value === 'All') setProjects(workHistory);
    else {
      const newWorkHistory = workHistory?.filter(({ type }) => type.includes(value));
      setProjects(newWorkHistory);
    }
  }

  return (
    <>
      <CustomModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        projectInfo={projectInfo}
        setProjectInfo={setProjectInfo}
      />
      <div id="portfolio" className="portfolio">
        <h1 style={{ paddingLeft: '75px', paddingTop: '28px' }}><b>Portfolio</b></h1>
        <div className="development">
          <div onClick={() => handleTabChange('All')}>
            <span style={{ color: active === 'All' ? 'orangered' : 'grey', cursor: 'pointer' }}>All</span>
          </div>
          <div onClick={() => handleTabChange('App')}>
            <span style={{ color: active === 'App' ? 'orangered' : 'grey', cursor: 'pointer' }}>App Development</span>
          </div>
          <div onClick={() => handleTabChange('Web')}>
            <span style={{ color: active === 'Web' ? 'orangered' : 'grey', cursor: 'pointer' }}>Web Development</span>
          </div>
        </div>
        <div className="projects-details">
          {
            projects?.map(({
              title,
              type,
              src,
              description,
              role
            }, i) => {
              return <div
                key={i}
                className="projects-items"
                style={type === 'App Development' ? { backgroundColor: '#FFEED9' } : {}}
                onClick={() => {
                  setProjectInfo({
                    title,
                    description,
                    role
                  })
                  setIsModalOpen(true);
                }}
              >
                <div>
                  <img className="rec-img" height={100} width={250} src={src} alt="rectangle" />
                  <span className="project-info-basic">{type}</span>
                </div>
                <span className="project-title"><b>{title}</b></span>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Work;
