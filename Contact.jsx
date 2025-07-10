import React, { useRef } from 'react';
import './Contact.css';
import { motion, useInView } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { amount: 0.2 });

  const iconVariants = {
    visible: {
      scale: [0.8, 1, 0.8],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 3,
        ease: 'easeInOut'
      }
    },
    hidden: { scale: 0 },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: 'spring'
      }
    }),
  };

  return (
    <div className="contact-section">
      {/* Animated heading for consistency */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <div className="contact-form" ref={formRef}>
        {['Enter your name', 'Enter your email', 'Phone number'].map((placeholder, i) => (
          <motion.input
            key={i}
            type={i === 1 ? 'email' : i === 2 ? 'tel' : 'text'}
            placeholder={placeholder}
            className={`input ${i === 0 ? 'name-input' : i === 1 ? 'email-input' : 'phone-input'}`}
            variants={inputVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={i}
          />
        ))}
        <motion.textarea
          placeholder="Your message"
          className="input message-input"
          variants={inputVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
        />

        <motion.div
          className="button-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6, type: 'spring', stiffness: 120 }}
        >
          <button className="neumorphic-button">Submit</button>
        </motion.div>
      </div>

      <footer className="contact-footer">
        <div className="social-buttons">
          {[InstagramIcon, FacebookIcon, TelegramIcon, WhatsAppIcon].map((Icon, i) => (
            <motion.a
              key={`${i}-${isInView}`}
              href={
                i === 0
                  ? 'https://instagram.com/_logesh_1910'
                  : i === 1
                  ? 'https://www.facebook.com/logeshp19'
                  : i === 2
                  ? 'https://t.me/9842749893'
                  : 'https://wa.me/919842749893'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="social-button no-hover-zoom"
              variants={iconVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Contact;
