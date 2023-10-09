import React from 'react'
import styles from './faq.module.css'
import MyDisclosure from './MyDisclosure'
import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'
import question from '../../../../public/images/home/faq/question.png'
import starwhite from '../../../../public/images/utility/starw.svg'
import starash from '../../../../public/images/utility/stara.svg'
import stardarkpurple from '../../../../public/images/utility/stardp.svg'
import starlightpurple from '../../../../public/images/utility/starlp.svg'


const Faq = () => {
  return (
    <section className='mt-[3.75rem] text-white pb-4 lg:px-[9%] border-b-[0.5px] border-borderline lg:mt-[7rem]'>
      <div className='mt-[2.86rem] lg:flex lg:gap-x-6'>
         <div className='lg:mt-16'>
          <div className='w-fit relative mx-auto lg:w-full'>
            <h3 className={`${styles.header}`}>Frequently Ask</h3>
            <h3 className={`${styles.header} text-highlighttxt`}>Question</h3>
            <ResponsiveImage 
              url={stardarkpurple}
              alt='star'
              addons=''
              style={styles.stardp}
            />
          </div>
          <p className='mx-12 text-center font-primary text-xs leading-[1.125rem] mt-[0.38rem] lg:text-sm lg:leading-[1.71875rem] lg:text-left lg:mx-0'>we got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
          <div className='mt-[2.86rem] mx-[2.99rem] lg:mx-0 flex flex-col gap-[0.83rem]'>
            <MyDisclosure />
            <MyDisclosure />
            <MyDisclosure />
            <MyDisclosure />
            <MyDisclosure />
            <MyDisclosure />
          </div>
         </div>
        <div className='mt-[5.38rem] relative mx-8 lg:mx-0 lg:min-w-[55%] lg:max-w-[55%] lg:w-[55%] lg:mt-0'>
          <ResponsiveImage 
            url={question}
            alt='faq'
            addons=''
            style={styles.faq}
          />
          <ResponsiveImage 
            url={starwhite}
            alt='star'
            addons=''
            style={styles.starwhite}
          />
          <ResponsiveImage 
            url={starash}
            alt='star'
            addons=''
            style={styles.starash}
          />
          <ResponsiveImage 
            url={starlightpurple}
            alt='star'
            addons=''
            style={styles.starlp}
          />
          <ResponsiveImage 
            url={starlightpurple}
            alt='star'
            addons=''
            style={styles.starlp2}
          />
          <h3 className={`absolute -top-4 lg:-top-12 left-[14%] ${styles.q1} text-qdark `}>?</h3>
          <h3 className={`!text-[4rem] xl:!text-9xl  ${styles.q1} text-qlight absolute -top-14 lg:-top-24 left-[33%] `}>?</h3>
          <h3 className={`${styles.q1} -top-4 lg:-top-12 text-qdark absolute  left-[57%] `}>?</h3>
        </div>
      </div>
     

    </section>
  )
}

export default Faq