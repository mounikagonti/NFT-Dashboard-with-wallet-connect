import React, { useRef, useState } from "react"
import { useId } from "react"
import Image from "next/image"
import { TiHome } from "react-icons/ti"
import { IoIosSettings, IoIosRocket } from "react-icons/io"
import { RiDatabaseFill, RiBankCard2Fill } from "react-icons/ri"
import { CgProfile, CgNotes } from "react-icons/cg"

const SidebarTop = ({ sidebarRef }: any) => {
  var navTopItems: any = [
    {
      id: useId(),
      icon: <TiHome />,
      heading: "Dashboard",
      active: true,
    },
    {
      id: useId(),
      icon: <RiDatabaseFill />,
      heading: "Market",
      active: false,
    },
    {
      id: useId(),
      icon: <RiBankCard2Fill />,
      heading: "My Cards",
      active: false,
    },
    {
      id: useId(),
      icon: <IoIosSettings />,
      heading: "Settings",
      active: false,
    },
  ]
  const [sidebarTopArray, setSidebarTopArray] = useState(navTopItems)
  const activeElement = useRef<any>(null)

  var navBottomItems: any = [
    {
      id: useId(),
      icon: <CgProfile />,
      heading: "Profile",
      active: false,
    },
    {
      id: useId(),
      icon: <CgNotes />,
      heading: "Sign In",
      active: false,
    },
    {
      id: useId(),
      icon: <IoIosRocket />,
      heading: "Sign Up",
      active: false,
    },
  ]
  const [sidebarBottomArray, setSidebarBottomArray] = useState(navBottomItems)
  const activeBottomElement = useRef<any>(null)

  const activeClickElement = (index: number) => {
    const currentItem = sidebarTopArray[index]
    currentItem.active = true
    // console.log(currentItem)
    const updatedSidebar = sidebarTopArray.map((item: any, i: number) => {
      if (i === index) {
        return currentItem
      } else {
        item.active = false
        return item
      }
    })
    setSidebarTopArray([...updatedSidebar])
    const updatedBottomSidebar = sidebarBottomArray.map(
      (item: any, i: number) => {
        item.active = false
        return item
      }
    )
    setSidebarBottomArray([...updatedBottomSidebar])
  }

  // console.log(sidebarTopArray)

  const activeBottomClickElement = (index: number) => {
    const currentItem = sidebarBottomArray[index]
    currentItem.active = true
    const updatedBottomSidebar = sidebarBottomArray.map(
      (item: any, i: number) => {
        if (i === index) {
          return currentItem
        } else {
          item.active = false
          return item
        }
      }
    )
    setSidebarBottomArray([...updatedBottomSidebar])
    const updatedSidebar = sidebarTopArray.map((item: any, i: number) => {
      item.active = false
      return item
    })
    setSidebarTopArray([...updatedSidebar])
  }

  // console.log(sidebarBottomArray)

  return (
    <div className='main_sidebar' ref={sidebarRef}>
      <div className='sidebarTop'>
        <div className='logo_wrapper'>
          <div className='img_wrapper'>
            <Image
              src='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/asteria-dashboard/logo.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <p className='logo_title'>Loopple NFTs</p>
        </div>
        <div className='sidebar_sticky'>
          <div className='top_links'>
            {sidebarTopArray.map((link: any, index: number) => (
              <div
                key={link?.id}
                ref={activeElement}
                className={
                  link?.active ? "icon_wrapper active_navLink" : "icon_wrapper"
                }
                onClick={() => activeClickElement(index)}
              >
                <div className='link_icon'>{link?.icon}</div>
                <div className='link_text'>{link?.heading}</div>
              </div>
            ))}
          </div>
          <div className='sidebar_heading'>Account pages</div>
          <div className='sidebarBottom'>
            {sidebarBottomArray.map((bottomLink: any, index: number) => (
              <div
                ref={activeBottomElement}
                className={
                  bottomLink?.active
                    ? "bottom_links active_bottomNavLink"
                    : "bottom_links"
                }
                key={bottomLink?.id}
                onClick={() => activeBottomClickElement(index)}
              >
                <div className='bottom_icon'>{bottomLink?.icon}</div>
                <div className='bottom_link'>{bottomLink?.heading}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarTop
