import React, { useRef } from "react"
import { BiSearch } from "react-icons/bi"
import { IoIosNotifications, IoMdPerson } from "react-icons/io"
import { GrMenu } from "react-icons/gr"
import Avatar from "../avatar/Avatar"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const handleConnectWalletBtn = () => {}

const Header = ({ handleToggle }: any) => {
  const toggle = useRef(null)
  return (
    <div className='header_wrapper'>
      <div className='header_left'>
        <div className='search_icon'>
          <div className='menu_btn'>
            <GrMenu className='menu_icon' onClick={handleToggle} />
          </div>
          <BiSearch className='search_icon' />
          <input
            className='search_input'
            type='text'
            placeholder='Search here...'
          />
        </div>
      </div>
      <div className='header_right'>
        <div className='wallet'>
          <ConnectButton />
        </div>
        <IoIosNotifications className='notification' />
        <IoMdPerson className='person' />
        <Avatar
          className='profile'
          url='https://lh3.googleusercontent.com/ogw/ADea4I4xylUgccJY5Nv1gHh1B8BD4IV1HIWnfmJhvFqu0Q=s64-c-mo'
        />
      </div>
    </div>
  )
}

export default Header
