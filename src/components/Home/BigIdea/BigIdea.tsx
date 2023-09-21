import React from 'react'
import styles from './bigidea.module.css'
import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'
import starDP from '../../../../public/images/home/bigidea/stardp.svg'
import bigidea from '../../../../public/images/home/bigidea/bigIdea.png'
import spiral from '../../../../public/images/home/bigidea/spiral.svg'
import starLP from '../../../../public/images/home/bigidea/starlp.svg'
const BigIdea = () => {
  return (
    <section className='text-white bg-bigIdeaBg lg:mx-[9%] lg:flex lg:items-center lg:gap-x-[6.81rem] lg:py-8'>
     <div className='relative w-[71%] mx-auto aspect-[1.01/1]  lg:flex-1 lg:w-[calc(50%-3.405rem)] lg:min-w-[calc(50%-3.405rem)] '>
      <ResponsiveImage 
       alt='hero'
       addons=''
       url={bigidea}
       style={styles.bigIdea}
      />
      <ResponsiveImage 
       alt='spiral'
       url={spiral}
       addons=''
       style={styles.spiral}
      />
      <ResponsiveImage 
       alt='star'
       url={starLP}
       addons=''
       style={styles.starLp}
      />
     </div>
     <div className='lg:flex-1 lg:w-[calc(50%-3.405rem)]'>
      <div className='w-fit relative mx-auto mt-[3.62rem] lg:w-full lg:mx-0 '>
       <h3 className={`${styles.header}`}>Introductiontogetlinked</h3>
       <h3 className={`${styles.header} text-highlighttxt`}>tech Hackathon 1.0</h3>
       <ResponsiveImage 
        url={starDP}
        alt='star'
        addons=''
        style={styles.starDp}
       />
      </div>
      <p className='mx-[2.7rem] font-primary text-center text-[0.8125rem] mt-[0.56rem] leading-[1.71875rem] lg:text-left lg:mx-0 lg:text-[0.875rem]'>
       Our tech hackathon is a melting pot of visionaries, and its purpose is as
       clear as day: to shape the future. Whether you're a coding genius, a 
       design maverick, or a concept wizard, you'll have the chance to transform 
       your ideas into reality. Solving real-world problems, pushing the boundaries
       of technology, and creating solutions that can change the world,
       that's what we're all about!
      </p>
     </div>
    </section>
  )
}

export default BigIdea