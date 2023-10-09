import React from 'react'

interface props {
  header: string,
  para: string
}

const Attributes = ({ header, para }: props) => {
  return (
    <p className='text-center font-primary text-white text-xs leading-[173.5%] lg:text-left lg:text-sm'>
     <span className='text-highlighttxt2 mr-[2px] font-bold lg:text-baseS text-[0.8125rem]'>{header}</span>: {para}
    </p>
  )
}

export default Attributes