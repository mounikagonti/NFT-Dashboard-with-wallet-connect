import React from "react"
import Image from "next/image"

interface I_Avatar {
  url: string
  className: string
}

const Avatar = ({ url, className }: I_Avatar) => {
  return (
    <div className='avatar_wrapper'>
      <Image
        className={`${className}`}
        src={url}
        layout='fill'
        objectFit='contain'
        style={{ borderRadius: "50%" }}
      />
    </div>
  )
}

export default Avatar
