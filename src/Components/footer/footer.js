import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Countries</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +998 94 806 92 75</p>
          <p>Whatsapp: +91 9488926736</p>
          <p>
            Email:{" "}
            <a href="mailto:hiveeduco.slm@gmail.com">hiveeduco.slm@gmail.com</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Hive Educo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;