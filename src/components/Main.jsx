import React from "react";
import "../styles/Main.css";
import logo from '../images/white-logo.svg';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Importing WhatsApp and Instagram icons

const Main = () => {
  return (
    <div>
      <div className="kursii-design">
        <div className="background"></div>

        <div className="content-wrapper">
          <img src={logo} alt="Kursii logo" className="logo-svg" />

          <div className="logo-and-text">
            <h1 className="header-text">Ergonomics meets style</h1>
            <p className="sub-header-text">
              Kursii's new website is coming soon, featuring{" "}
              <span className="second-line">
                exquisite chairs and innovative design. Stay tuned!
              </span>
            </p>
          </div>
          
          {/* Bottom Section */}
          <div className="bottom-section">
            <button className="action-button"
            onClick={() => window.open('https://wa.me/919072583344', '_blank')}
            >Contact us</button>

            {/* Social Media Icons */}
            <div className="icon-container">
              <a href="https://wa.me/919072583344" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} color="#fff" />
              </a>
              <a href="https://www.instagram.com/kursii.in/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
