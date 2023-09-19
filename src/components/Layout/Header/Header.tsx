'use client'
import menubar from '../../../../public/images/header/menubar.svg'
import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'
import styles from './header.module.css'
import { useState } from 'react'
import MenuLists from './MenuLists'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu(){
    setIsOpen(prev => !prev)
  }


  return (
    <header className='px-[3rem] py-[2.12rem] border-b-[0.2px] border-borderline lg:pt-[3rem] lg:pb-[1.56rem]'>
     <nav className='flex justify-between items-center'>
      <h3 className='text-white font-secondary font-bold text-base lg:text-3xl xl:text-4xl'><Link href='/'>get<span className='text-highlighttxt'>Linked</span></Link></h3>
      <MenuLists 
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
      <div className='lg:hidden' onClick={toggleMenu}>
        <ResponsiveImage 
          alt='menubar'
          url={menubar}
          addons=''
          style={styles.menubar} 
        />
      </div>
      
     </nav>
    </header>
  )
}

export default Header;