
import React from 'react';
import '../components/Education.css';

const Education = () => {
  console.log('Rendering Education component');
  console.log('Education items:');
  console.log([
    { degree: 'Master of Science', institution: 'Indira Gandhi National Open University', dates: '2022 - 2025' },
    { degree: 'Bachelor of Science', institution: 'Kerala University', dates: '2018 - 2021' },
    { degree: 'Higher Secondary Education', institution: 'Kerala board', dates: '2016 - 2018' },
    { degree: 'Higher School Education', institution: 'Kerala board', dates: '2015 - 2016' },
  ]);

  return (
    <div className="education-section">
      <h2 className="e">Education</h2>
      <div className="education-item">
        <div className="education-content">
          <h3>Master of Science</h3>
          <span className="education-dates">2022 - 2025</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
