import React from 'react'
import styles from './criteria.module.css'
import Attributes from './attributes'
import criteria from '../../../../public/images/home/criteria/criteria.png'
import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'
import starDp from '../../../../public/images/home/criteria/stardp.svg'
import starLp from '../../../../public/images/home/criteria/starLp.svg'
import starW from '../../../../public/images/home/criteria/starw.svg'
import data from './data'

const Criteria = () => {
  const attributesElements = data.map((each, idx) => {
    return <Attributes 
              key={idx}
              header={each.header}
              para={each.para}
          />
  })
  return (
    <section className='text-white pt-[4.62rem] lg:gap-x-[3rem] lg:flex  pb-8 border-b-[0.5px] border-borderline lg:px-[9%]'>
     <div className='relative w-[85%] mx-auto aspect-[1.23/1]  lg:flex-1 lg:w-[calc(50%-3.405rem)] lg:min-w-[calc(50%-1.5rem)]  lg:mt-24 h-fit'>
      <ResponsiveImage 
        alt='criteria'
        addons=''
        url={criteria}
        style={styles.criteria}
      />
      <ResponsiveImage 
        alt='starDP'
        addons=''
        url={starDp}
        style={styles.starDp}
      />
      <ResponsiveImage 
        alt='starLp'
        addons=''
        url={starLp}
        style={styles.starLp}
      />
     </div>
     <div className='lg:flex-1 lg:w-[calc(50%-3.405rem)] lg:max-w-[calc(50%-1.5rem)]'>
      <div className='w-fit relative mx-auto  lg:w-full lg:mx-0 lg:mt-0'>
        <h3 className={`${styles.header}`}>Judging Criteria</h3>
        <h3 className={`${styles.header} text-highlighttxt`}>Key attributes</h3>
      </div>
      <div className='mt-4 flex flex-col gap-y-5 mx-[2.94rem] lg:mx-0'>
       {attributesElements  }
      </div>
      <div className='mt-5 lg:mt-12 relative w-fit mx-auto lg:mx-0'>
        <button className='btngradient btnprimary w-[6.02188rem] h-[1.95913rem] text-xs font-primary lg:w-[9.75rem] lg:h-[3rem] lg:text-base'>Read More</button>
        <ResponsiveImage 
          url={starW}
          alt='star white'
          addons=''
          style={styles.starw}
        />
      </div>
     </div>
    </section>
  )
}

export default Criteria