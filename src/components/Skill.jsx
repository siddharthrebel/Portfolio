import React from 'react';
import SkillBar from './SkillBar';
import { motion } from 'framer-motion';

const skills = [
  { skill: 'Java', level: 90 },
  { skill: 'Python', level: 80 },
  { skill: 'HTML', level: 90 },
  { skill: 'CSS', level: 80 },
  { skill: 'JavaScript', level: 70 },
  { skill: 'React', level: 50 },
  { skill: 'MySQL', level: 70 },
];

// Define variants for the staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

const Skill = () => {
  return (
    <motion.div
      className="main"
      id="Skill"
      initial="hidden" // Start with the hidden state
      whileInView="visible" // Animate to the visible state when in view
      viewport={{ once: false, amount: 0.3 }} // Trigger animation each time it enters 30% of the viewport
      variants={containerVariants} // Apply the stagger effect
    >
      <h1 className="skill-heading">Skills</h1>
      <div className="skill-list">
        <div className="skill">
          {skills.map((item, index) => (
            <SkillBar key={index} skill={item.skill} level={item.level} />
          ))}
        </div>
        <div className="skill-right">
          <div className="img">
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;