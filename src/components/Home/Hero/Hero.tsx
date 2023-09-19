import React from 'react'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <section>
     <div className=''>
      <h3>Igniting a Revolution in HR innovation</h3>
     </div>
     <div>
      <HeroContent />
      <HeroImage />
     </div>
    </section>
  )
}

export default Hero