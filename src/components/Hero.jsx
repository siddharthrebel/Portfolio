import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id='Hero' className='hero'>
      <div className='left'>
        <h1>Hii,</h1>
        <div className='name'>
          <h1>I'am </h1>
          <h1>Siddharth</h1>
        </div>
        <h1>Software Engineer</h1>
        
        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#ff5722' }} // Button grows on hover and changes color
          whileTap={{ scale: 0.9 }} // Shrinks slightly when clicked
          transition={{ duration: 0.3 }} // Smooth transition for the effects
        >
          Contact
        </motion.button>
      </div>

      <div className='right'>
        <div className='img'></div>
      </div>
    </div>
  );
}

export default Hero;