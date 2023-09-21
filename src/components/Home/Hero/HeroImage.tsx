import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'
import React from 'react'
import hero from '../../../../public/images/home/hero/hero.png'
import style from './hero.module.css'

const HeroImage = () => {
  return (
    <div className='mt-[1.05rem] w-full aspect-[1/1.15] bg-heroBg bg-no-repeat bg-center bg-contain lg:flex-1 min-w-[50%] relative'>
      <div className='w-[95%] aspect-[1/1.07] mx-auto'>
        <ResponsiveImage 
          url={hero}
          alt='hero'
          addons=''
          style={style.hero}
        />
      </div>
    </div>
  )
}

export default HeroImage