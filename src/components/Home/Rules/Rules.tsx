import styles from './rules.module.css'
import starW from '../../../../public/images/home/rules/starw.svg'
import starP from '../../../../public/images/home/rules/starp.svg'
import rules from '../../../../public/images/home/rules/rules.png'
import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'

const Rules = () => {
  return (
    <section className='text-white pb-8 border-b-[0.5px] border-borderline lg:px-[9%] lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-[3rem] '>
     <div className='relative w-[75%] mx-auto aspect-[1/1.3]   lg:flex-1 lg:w-[calc(50%-3.405rem)] lg:min-w-[calc(50%-1.5rem)'>
      <ResponsiveImage 
       url={rules}
       alt='rules'
       addons=''
       style={styles.rules}
      />
      <ResponsiveImage 
       url={starW}
       alt='star'
       addons=''
       style={styles.starW2}
      />
     </div>
     <div className='mt-[0.62rem] w-fit relative lg:flex-1 lg:w-[calc(50%-3.405rem)] lg:max-w-[calc(50%-1.5rem)]'>
      <div className='w-fit relative mx-auto lg:mx-0'>
       <h3 className={`${styles.header}`}>Rules and</h3>
       <h3 className={`${styles.header} text-highlighttxt`}>Guidelines</h3>
       <ResponsiveImage 
        url={starP}
        alt='purple star'
        addons=''
        style={styles.starP1}
       />
      </div>
      <p className='mx-[2.7rem] font-primary text-center text-[0.8125rem] mt-[0.56rem] leading-[1.71875rem] lg:text-left lg:mx-0 lg:text-[0.875rem]'>
       Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries
       of technology, and creating solutions that can change the world, that's what we're all about!
      </p>
      <ResponsiveImage 
       url={starW}
       alt='white star'
       addons=''
       style={styles.starW}
      />
     </div>
    </section>
  )
}

export default Rules