import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level }) => {
  return (
    <motion.div
      className="skill-bar"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.3 }} 
      transition={{ duration: 0.5 }} n
    >
      <h3>{skill}</h3>
      <div className="bar-container">
        <motion.div
          className="bar"
          initial={{ width: 0 }} 
          animate={{ width: `${level}%` }} 
          transition={{ duration: 1.5, ease: 'easeInOut' }} 
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;