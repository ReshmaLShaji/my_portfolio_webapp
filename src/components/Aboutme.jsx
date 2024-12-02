
import React from 'react';
import '../components/About.css';
import pic from '../components/resh.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Aboutme = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text on the left side */}
        <div className="col-md-7 mb-4 mb-md-0">
          <div className="about">
            <h2 className="a mb-3">About Me</h2>
            <p>
              Hi! I'm a passionate Front-end Developer with a deep interest in crafting efficient, scalable, and dynamic web applications. My expertise spans a variety of modern web technologies, including HTML, CSS, Bootstrap, JavaScript, and ReactJS on the front end, along with Python on the back end. I’m excited about continuous learning and exploring new technologies, and I’m always looking for opportunities to collaborate on innovative projects.
            </p>
            <p>Thank you for visiting my portfolio!</p>
            <p>Let’s build something amazing together!</p>
          </div>
        </div>

        {/* Image on the right side */}
        <div className="col-md-5 text-center">
          <img src={pic} alt="profile" className="img-fluid rounded pic" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
