import React from 'react';
import './Contact.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact</h2>

      <div className="contact-form">
        <input type="text" placeholder="Enter your name" className="input name-input" />
        <input type="email" placeholder="Enter your email" className="input email-input" />
        <input type="tel" placeholder="Phone number" className="input phone-input" />
        <textarea placeholder="Your message" className="input message-input" />

        <div className="button-wrapper">
          <button className="neumorphic-button">Submit</button>
        </div>
      </div>

      {/* Footer inside the section */}
      <footer className="contact-footer">
        <div className="social-buttons">
          <a
            href="https://instagram.com/_logesh_1910"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <InstagramIcon />
          </a>

          <a
            href="https://www.facebook.com/logeshp19"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FacebookIcon />
          </a>

          <a
            href="https://t.me/9842749893"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <TelegramIcon />
          </a>

          <a
            href="https://wa.me/919842749893"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

