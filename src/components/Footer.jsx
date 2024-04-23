import React, { useState } from "react";
import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerlogo.jpg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+918318233045</p>
          <p>towntreasures@gmail.com</p>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
          <a href="#">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
              Town <span>Treasures</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Unveil the Unexplored</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <form onSubmit={handleSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required="" />
            <hr />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required="" />
            <hr />
            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter your email id" required="" />
            <hr />
            <label >Write your messages here</label>
            <textarea name="message" rows="2" placeholder="Enter your message" required=""></textarea>
            <hr />
            
              
            <button type="submit" className="btn dark-btn submit-btn">Submit now <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII=" alt="" /></button>
            {submitted && <p>We have received your information.</p>}
          </form>
        </div>
      </div>
      {submitted && (
        <div className={Classes.modalContainer}>
          <h5>We Received your information</h5>
          <button onClick={() => setSubmitted(false)}>Ok</button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
