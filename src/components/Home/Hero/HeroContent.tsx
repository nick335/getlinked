import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'
import React from 'react'
import chain from '../../../../public/images/home/hero/chain-1.svg'
import bulb from '../../../../public/images/home/hero/Creative.svg'
import brightstar from '../../../../public/images/home/hero/whitestar.svg'
import dullstar from '../../../../public/images/home/hero/ashstar.svg'
import fire from '../../../../public/images/home/hero/fire.svg'
import styles from './hero.module.css'

const HeroContent = () => {
  return (
    <div className='mt-[3.2rem] text-white relative lg:mt-[6rem] lg:pl-[5%] lg:flex-1 lg:w-2/4 lg:h-fit'>
      <div>
        <div className='w-fit h-fit mx-auto relative lg:mx-0'>
          <h3 className={`${styles.heroHeader}`}>getlinkedTech</h3>
          <ResponsiveImage 
            url={bulb}
            alt='bulb'
            addons=''
            style={styles.bulb}
          />
          <ResponsiveImage 
            url={brightstar}
            alt='star'
            addons=''
            style={styles.brightstar}
          />
          <ResponsiveImage 
            url={dullstar}
            alt='star'
            addons=''
            style={styles.dullstar1}
          />
        </div>
        
        <div className='w-fit h-fit mx-auto flex items-center lg:flex-nowrap lg:relative lg:w-[140%] z-10 '>
          <h3 className={`${styles.heroHeader} flex items-center`}>Hackathon <span className='text-highlighttxt'>1.0</span></h3>
          <ResponsiveImage 
            url={chain}
            addons=''
            alt='chain'
            style={styles.chain}
          />
          <ResponsiveImage 
            url={fire}
            addons=''
            alt='fire'
            style={styles.fire}
          />
        </div>
        <p className='mt-[0.56rem] mx-12 text-center font-primary text-[0.8125rem] lg:mx-0 lg:text-xl lg:max-w-[32.625rem] lg:text-left'>Participate in getlinked tech Hackathon 2023 stand 
        a chance to win a Big prize</p>
      </div>
      <button className='mt-6 relative left-2/4 -translate-x-2/4 btnprimary btngradient w-[9.5rem] h-[2.9273rem] lg:mt-[2.56rem] lg:static lg:-translate-x-0'>Register</button>
      <div className='mt-[0.89rem] text-5xl lg:text-[4rem] flex justify-center gap-x-[0.88rem] lg:justify-start lg:mt-[4.81rem] '>
        <h4>00<span className='text-sm font-primary'>H</span></h4>
        <h4>00<span className='text-sm font-primary'>M</span></h4>
        <h4>00<span className='text-sm font-primary'>S</span></h4>
      </div>
      <ResponsiveImage 
        alt='star'
        url={dullstar}
        addons=''
        style={styles.dullstar2}
      />
    </div>
  )
}

export default HeroContent