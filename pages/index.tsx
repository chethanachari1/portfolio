import { useState } from "react"
import { motion } from "framer-motion"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Certifications } from "@/components/Certifications"
import { Contact } from "@/components/Contact"
import { Skills } from "@/components/Skills"

export default function Home() {
  const [bgColor, setBgColor] = useState("#ffffff")

  const pageVariants = {
    initial: { 
      opacity: 0 
    },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  }

  return (
    <motion.div 
      className="min-h-screen" 
      style={{ 
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease" 
      }}
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </motion.div>
  )
} 