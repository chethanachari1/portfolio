import React from 'react';
import { motion } from "framer-motion";

interface Skill {
  name: string;
  proficiency: number;
}

const skills: Skill[] = [
  { name: "Java", proficiency: 90 },
  { name: "TensorFlow", proficiency: 85 },
  { name: "Computer Networks", proficiency: 75 },
  { name: "Operating Systems", proficiency: 85 },
  { name: "Python", proficiency: 80 },
  { name: "OpenCV", proficiency: 80 },
  { name: "Firebase", proficiency: 80 },
  { name: "DSA", proficiency: 75 },
  { name: "Automotive Electronics", proficiency: 85 },


];

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 3 === 0 ? -100 : index % 3 === 2 ? 100 : 0,
    y: 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const Skills: React.FC = () => {
  return (
    <motion.section 
      id="skills"
      className="min-h-screen py-20 px-4 flex flex-col justify-center"
      style={{ minHeight: 'calc(100vh - 64px)' }}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl w-full place-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card w-20 h-20 sm:w-28 sm:h-28 group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative z-10">
                  <h3 className="text-lg font-medium text-center text-gray-800 group-hover:text-black transition-colors">
                    {skill.name}
                  </h3>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 