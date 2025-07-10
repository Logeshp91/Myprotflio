import React from 'react';
import { motion } from 'framer-motion';
import './Hightlights.css';

const highlightsData = [
  { title: 'Efficient Code Sharing', description: 'Leveraged React Native’s component-based architecture to reduce feature deployment time and streamline workflows, resulting in fewer development hours.' },
  { title: 'UI/UX Design', description: 'Designed and executed intuitive interfaces, which led to a noticeable increase in user engagement and improved user satisfaction based on feedback.' },
  { title: 'Front-End Technologies', description: 'Utilized HTML, CSS, and React Native to develop responsive, high-performance applications, contributing to fewer user complaints related to loading speed.' },
  { title: 'Package Management (NPM)', description: 'Managed and optimized React Native packages, reducing load time and enhancing app stability, as evidenced by a decrease in reported crashes.' },
  { title: 'State Management (Redux)', description: 'Applied Redux for state management, improving app responsiveness and reducing state-related bugs.' },
  { title: 'Google Integrations', description: 'Integrated Google Sign-In with Firebase, boosting user sign-ups, and implemented Google Maps to enhance geolocation accuracy and minimize location-based errors.' },
  { title: 'API Integration', description: 'Integrated multiple APIs to enable seamless third-party communication and expand app functionality, resulting in a broader feature set.' },
  { title: 'Data Fetching', description: 'Adopted Fetch and Axios for efficient data retrieval, which improved data processing speed and reduced backend load.' },
  { title: 'Performance Optimization', description: 'Refactored code and used asynchronous processing to reduce app load time, leading to an increase in daily user retention.' },
  { title: 'Push Notifications', description: 'Integrated Firebase Cloud Messaging to drive higher user engagement through timely and relevant notifications.' },
  { title: 'Payment Integration', description: 'Incorporated Razorpay to ensure reliable payment processing across UPI and other methods, enhancing user experience during transactions.' },
];

// Alternate angles per card
const getInitialByIndex = (index) => {
  const directions = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: 100 },
    { x: 0, y: -100 },
  ];
  return directions[index % directions.length];
};

const Highlights = () => {
  return (
    <div className="highlights-section">
      <h2 className="highlights-title">Professional Highlights</h2>
      <ul className="highlights-list">
        {highlightsData.map((item, index) => {
          const initial = getInitialByIndex(index);

          return (
            <motion.li
              key={index}
              className="highlight-item"
              initial={{ opacity: 0, ...initial }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.4 }} 
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 2 }}
                viewport={{ once: false }}
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: false }}
              >
                {item.description}
              </motion.p>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Highlights;
