import HeroContent from './HeroContent'
import HeroImage from './HeroImage'
import curvedline from '../../../../public/images/home/hero/curvedline.svg'
import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'
import styles from './hero.module.css'
const Hero = () => {
  return (
    <section className={`mt-4 lg:mt-8 `}>
     <div className='relative h-fit w-fit mx-auto lg:mx-0 lg:ml-auto lg:mr-[3.44rem] '>
      <h3 className='text-white font-primary italic font-bold text-base lg:text-4xl'>Igniting a Revolution in HR Innovation</h3>
      <ResponsiveImage 
        url={curvedline}
        addons=''
        alt='curvedline'
        style={styles.curvedline}
      />
     </div>
     <div className='lg:flex lg:flex-1'>
      <HeroContent />
      <HeroImage />
     </div>
    </section>
  )
}

export default Hero