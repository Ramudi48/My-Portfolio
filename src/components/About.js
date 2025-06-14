import React from "react";
import "./About.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <h3>
            I’m <span className="highlight">Ramudi Munasinghe</span>, an{" "}
            <span className="highlight-blue">Undergraduate Software Engineer</span>
          </h3>
          <p>
            I currently study at the <span className="highlight">Informatics Institute of Technology</span> in Sri Lanka,
            collaborating with the <span className="highlight">University of Westminster</span> in the United Kingdom.
            I'm always eager to learn new technologies and stay up-to-date wvith industry trends.
            My goal is to become a proficient software engineer and contribute meaningfully to the IT industry.
          </p>

          <ul className="about-details">
            <li><strong>Degree:</strong> BEng(Hons) Software Engineering</li>
            <li><strong>Email:</strong> <a href="ramudimunasinghe@gmail.com">ramudimunasinghe@gmail.com</a></li>
            <li><strong>Mobile:</strong> <a href="tel:+94762957442">(+94) 762957442</a></li>
            
          </ul>
        </div>
        

        <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>php</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>Python</span>
            <span>Java</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Flutter</span>
            <span>Figma</span>
            <span>Postman</span>
          </div>

        <div className="github-stats">
          <img
            src="https://camo.githubusercontent.com/9566f802aac8d03923d72b9d95fadc915acbec9766836ae522d066f409510dbc/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d72656163742c6a6176612c737072696e672c68746d6c2c6373732c6a732c6e6f64656a732c657870726573736a732c6d7973716c2c666c75747465722c646172742c6d6f6e676f64622c6769742c70792c7068702c6669676d612c706f73746d616e267468656d653d6461726b267065726c696e653d39"
            alt="Lashen's GitHub Stats"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
