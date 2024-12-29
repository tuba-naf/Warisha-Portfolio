'use client'
import React from 'react'
import Hero1 from './Components/Hero/page'
import About1 from './Components/About/page'
import Header1 from './Components/Header/page'
import Skills1 from './Components/Skills/page'
import ExperienceSection from './Components/Experience/page'
import FooterSection from './Components/Footer/page'

const Page = () => {
  return (
    <div>
      <Header1 />
      <Hero1 />
      
      {/* Add IDs to sections for smooth scrolling */}
      <section id="about">
        <About1 />
      </section>

      <section id="skills">
        <Skills1 />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="contact">
        <FooterSection />
      </section>
    </div>
  )
}

export default Page
