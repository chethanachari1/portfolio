import React from 'react';
import { motion } from "framer-motion";
import type { Project } from '@/types'

const projects: Project[] = [
  {
    title: "Performance Evaluation Two-staged and Mutli-staged Networks",
    description: "Optimizing Faster R-CNN and Cascade R-CNN for detecting camouflaged military targets in RGB and multispectral images with Micasense Altum-PT, aiming for 85%+ accuracy. Leveraging GPUs/TPUs for real-time performance and publishing findings in journals/conferences.",
    techStack: ["Python", "TensorFlow", "OpenCV"],
    color: "#f0f0f0",
    links: {
      github: "https://github.com/chethanachari1/", // Add your GitHub link here
    }
  },
  {
    title: "Campus Buddy",
    description: "Led development of the Campus Buddy app, ensuring 100% accurate marks calculation and attendance tracking while centralizing campus updates, events, internships, and academic resources. Enhanced student engagement through seamless information access",
    techStack: ["Flutter", "Firebase", "Figma"],
    color: "#e0e0e0",
    links: {
      github: "https://github.com/chethanachari1/", // Add your GitHub link here
      live: "#" // Add your live demo link if available
    }
  },
  {
    title: "LPG Gas Detection",
    description: "Led team in developing an Arduino-based gas detection system using MQ2 sensor and GSM module, ensuring reliable gas detection and remote alerts. Gained expertise in IoT hardware integration, sensor calibration, and GSM communication, achieving 80% detection accuracy.",
    techStack: ["Arduino IDE"],
    color: "#d0d0d0",
    links: {
      github: "https://github.com/chethanachari1/", // Add your GitHub link here
      demo: "#" // Add demo video link if available
    }
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1, 
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6
    }
  })
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

interface ProjectsProps {
  setBgColor: (color: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ setBgColor }) => {
  return (
    <motion.section 
      id="projects"
      className="min-h-screen flex flex-col justify-center py-20 px-4"
      style={{ minHeight: 'calc(100vh - 64px)' }}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glassmorphism p-6 group"
              onClick={() => setBgColor(project.color)}
              variants={projectVariants}
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-black transition-colors relative">
                {project.title}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-black/10 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-black/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2">GitHub</span>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="ml-2">Live Demo</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2">Demo Video</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};