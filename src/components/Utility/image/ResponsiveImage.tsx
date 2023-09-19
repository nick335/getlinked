import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface props {
 url: string | StaticImageData
 style: string
 alt: string
 addons: string | undefined
}

const ResponsiveImage = ({url, style, alt, addons}: props) => {
  return (
    <div className={style}>
     <Image 
      alt={alt}
      src={url}
      fill={true}
      className={`${addons} object-fill`}
     />
    </div>
  )
}

export default ResponsiveImage