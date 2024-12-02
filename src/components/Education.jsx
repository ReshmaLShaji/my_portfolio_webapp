
import React from 'react';
import '../components/Education.css';

const Education = () => {
  return (
    <div className="education-section">
      <h2 className='e'>Education</h2>
      <div className="education-item">
        <div className="education-content">
        <h3>Master of Science</h3>
          <span className="education-dates">2022 - 2025</span>
          <p className="education-institution">Indira Gandhi National Open University</p>
          <p className="education-description">Specialized in Environmental Science</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-content">
         
      <h3>Bachelor of Science</h3>
          <span className="education-dates">2018 - 2021</span>
          <p className="education-institution">Kerala University</p>
          <p className="education-description">Major in Geography</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-content">
        <h3>Higher Secondary Education</h3>
          <span className="education-dates">2016 - 2018</span>
          <p className="education-description">Kerala board</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-content">
        <h3>Higher School Education</h3>
          <span className="education-dates">2015 - 2016</span>
          <p className="education-description">Kerala board</p>
        </div>
      </div>
         
    </div>
  );
}

export default Education;
