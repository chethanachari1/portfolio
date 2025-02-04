import type { AppProps } from "next/app"
import { Link as ScrollLink } from "react-scroll"
import { useState } from "react"
import "../styles/globals.css"
import { ScrollProgress } from "@/components/ScrollProgress"
import { Footer } from "@/components/Footer"
import { CustomCursor } from "@/components/CustomCursor"
import { ScrollToTop } from '@/components/ScrollToTop'

function MyApp({ Component, pageProps }: AppProps) {
  const [bgColor, setBgColor] = useState<string>("#ffffff")

  return (
    <div style={{ backgroundColor: bgColor, transition: "background-color 0.5s ease" }}>
      <div className="geometric-pattern animate-float" />
      <div className="gradient-bg" />
      <CustomCursor />
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/75 backdrop-blur-md"></div>
        <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-4">
          <div className="text-lg sm:text-xl font-bold sm:mb-0">Chethan Achari</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              offset={-64}
              spy={true}
              className="text-sm sm:text-base text-black hover:text-gray-600"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              offset={-64}
              spy={true}
              className="text-sm sm:text-base text-black hover:text-gray-600"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={800}
              offset={-64}
              spy={true}
              className="text-sm sm:text-base text-black hover:text-gray-600"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="certifications"
              smooth={true}
              duration={800}
              offset={-64}
              spy={true}
              className="text-sm sm:text-base text-black hover:text-gray-600"
            >
              Certifications
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-64}
              spy={true}
              className="text-sm sm:text-base text-black hover:text-gray-600"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
      </nav>
      
      <ScrollProgress />
      
      <main className="relative">
        <Component {...pageProps} setBgColor={setBgColor} />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default MyApp