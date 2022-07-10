import React from "react"

const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <div className='footer_left'>
        <p className='footer_date'>
          &copy; {new Date().getFullYear()}, made by Loopple{" "}
        </p>
      </div>
      <div className='footer_right'>
        <p className='footer_link'>Loopple</p>
        <p className='footer_link'>About Us</p>
        <p className='footer_link'>Blog</p>
        <p>License</p>
      </div>
    </div>
  )
}

export default Footer
