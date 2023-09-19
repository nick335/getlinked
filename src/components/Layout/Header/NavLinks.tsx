import React from 'react'
import Link from 'next/link'
import styles from './header.module.css'
interface props {
 routeName : string
 name: string
}

const NavLinks = ({ routeName, name}: props) => {
  return (
    <Link href={routeName}>
     <li className={`${styles.menuLink}`}>{name}</li>
    </Link>
  )
}

export default NavLinks