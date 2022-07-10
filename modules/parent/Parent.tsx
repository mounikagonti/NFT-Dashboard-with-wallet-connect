import React, { useRef } from "react"
import Banner from "../banner/Banner"
import Coins from "../coins/Coins"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import SidebarTop from "../sidebarTop/SidebarTop"

const Parent = () => {
  const sidebarRef = useRef<any>()
  const handleToggleSidebar = () => {
    sidebarRef.current.classList.toggle("toggleMenuButton")
  }

  return (
    <div className='parent_wrapper'>
      <div className='left_side' ref={sidebarRef}>
        <SidebarTop />
      </div>
      <div className='right_side'>
        <Header handleToggle={handleToggleSidebar} />
        <Banner />
        <Coins />
        <Footer />
      </div>
    </div>
  )
}

export default Parent
