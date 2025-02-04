import React from 'react';
import { motion } from "framer-motion";
import type { Certification } from '@/types';

const certifications: Certification[] = [
  {
    id: 1,
    title: "Certificate Of Appreciation",
    issuer: "DRDO",
    date: "2024",
    description: "In recognition for contribution in Grant-in-aidscheme ARDB-DRDO, Ministry of Defense, Government of India\n[Project No:ARDB/01/1081990/M/11]",
    skills: ["Object Detection", "Deep Learning", "Computer Vision", "Python"],
    credentialLink: "#",
  },
  {
    id: 2,
    title: "CCNA",
    issuer: "Cisco",
    date: "2024",
    description: "Introduction to Networks certification, demonstrating foundational knowledge in networking concepts and technologies.",
    skills: ["Computer Networking", "Subnetting", "Routing"],
    credentialLink: "#",
  }
];

const cardVariants = {
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

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <div className="card-content">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-black transition-colors relative">
                  {cert.title}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                </h3>
                <p className="text-gray-600 mb-2">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-gray-700 mb-4 whitespace-pre-line">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-black/10 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-black/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors inline-flex items-center group"
                >
                  View Credential
                  <svg
                    className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 