

import React from 'react';
import '../components/Skill.css'
import html from '../components/html.jpeg'; // Update the path accordingly
 import css from '../components/css.jpeg'
 import boots from '../components/boots.jpeg'
 import reactLogo from '../components/react.jpeg' // 'react' is a reserved keyword
 import java from '../components/java.png'
 import msoffice from '../components/ms.jpg'


const Skills = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        
       
        <div className="col">
          <div className="card h-100">
            <img src={html} className="card-img-top" alt="html" />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">
                HTML (HyperText Markup Language) is the foundation of web development, allowing me to structure content and create semantic, accessible web pages.
              </p>
            </div>
          </div>
        </div>

       
        <div className="col">
          <div className="card h-100">
            <img src={css} className="card-img-top" alt="css" />
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <p className="card-text">
                Strong proficiency in CSS allows me to create responsive, visually appealing, and user-friendly layouts. I utilize Flexbox, Grid, and media queries for modern design techniques.
              </p>
            </div>
          </div>
        </div>

      
        <div className="col">
          <div className="card h-100">
            <img src={boots} className="card-img-top" alt="Bootstrap" />
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <p className="card-text">
              Proficient in building responsive, mobile-first websites using Bootstrap’s grid system and components. Experienced in customizing themes, integrating with React.js, and ensuring cross-browser compatibility. Skilled in utilizing Bootstrap’s utilities for efficient styling and creating interactive elements like forms, modals, and tooltips.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card h-100">
            <img src={java} className="card-img-top" alt="JavaScript" />
            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <p className="card-text">
                JavaScript is a versatile language for building dynamic, interactive web applications. With skills in front-end and back-end development, I can create responsive interfaces.
              </p>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card h-100">
            <img src={reactLogo} className="card-img-top" alt="React.js" />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">
                React is my go-to JavaScript library for building dynamic, single-page applications. I use hooks, state management, and component-based architecture to create fast, interactive web apps.
              </p>
            </div>
          </div>
        </div>

       
        <div className="col">
          <div className="card h-100">
            <img src={msoffice} className="card-img-top" alt="MS Office" />
            <div className="card-body">
              <h5 className="card-title">MS Office</h5>
              <p className="card-text">
              Proficient in MS Word for creating, formatting, and editing documents. Skilled in using advanced features such as styles, tables, and references for structured documents. Experienced in MS PowerPoint for designing engaging presentations with multimedia elements and advanced features.


              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

