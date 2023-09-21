import React from 'react'
import Data from './navData'
import NavLinks from './NavLinks'
import ResponsiveImage from '@/components/Utility/image/ResponsiveImage'
import cancel from '../../../../public/images/header/cancel.svg'
import styles from './header.module.css'


interface props {
  isOpen: boolean,
  toggleMenu: () => void
}

const MenuLists = ({isOpen, toggleMenu}: props) => {
  const menuLinks = Data.map((each, idx) => {
    return <NavLinks 
            key={idx}
            name={each.name}
            routeName={each.routeName}
           />
  })
  return (
    <div className={`fixed top-0 right-[-100%] w-full h-screen overflow-hidden bg-primaryBg  px-[3rem] ${ isOpen ? 'animate-slideIn z-[100000]' : 'animate-slideOut' } lg:static  lg:w-fit lg:h-fit lg:flex lg:items-center lg:gap-x-[7.56rem] lg:bg-transparent`}>
      <div onClick={toggleMenu} className='lg:hidden '>
        <ResponsiveImage 
          url={cancel}
          addons=''
          alt='cancel'
          style={styles.cancel}
        />
      </div>
     <ul className='mt-28 flex flex-col gap-y-5 lg:flex-row lg:mt-0 lg:gap-x-14'>
      {menuLinks}
     </ul>
     <button className='btngradient btnprimary w-[10.75rem] h-[3.3125rem] mt-[1.81rem] font-inter font-medium lg:mt-0 lg:font-primary'>Register</button>
    </div>
  )
}

export default MenuLists