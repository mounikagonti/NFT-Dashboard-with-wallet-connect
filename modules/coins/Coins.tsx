import React from "react"

import Avatar from "../avatar/Avatar"
import Image from "next/image"

interface I_CoinsArray {
  id: string
  url: string
  coinName: string
  personName: string
  avatar: string
  price: number
}

const coinsArray: I_CoinsArray[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1639503611585-1054af5dbfab?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    coinName: "The Heart of Hero",
    personName: "anthoine Reauseu",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    price: 0.34,
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    coinName: "Monster of Venice",
    personName: "Juliette Moreau",
    avatar:
      "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    price: 0.09,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    coinName: "Toys Friends",
    personName: "Aliece Froielle",
    avatar:
      "https://images.unsplash.com/photo-1514960919797-5ff58c52e5ba?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    price: 0.45,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    coinName: "Eggs Mania",
    personName: "Vladimir Orlensea",
    avatar:
      "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    price: 0.34,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1638957319391-9b81b996afca?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fDNkfGVufDB8MHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    coinName: "Robots in Future",
    personName: "John Fliersa",
    avatar:
      "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    price: 0.12,
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fDNkfGVufDB8MHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    coinName: "Bubble Gum",
    personName: "Andreea Yohanne",
    avatar:
      "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    price: 0.34,
  },
]

const Coins = () => {
  return (
    <div className='coins_wrapper'>
      {coinsArray.map((item: I_CoinsArray) => (
        <div className='coin_container' key={item?.id}>
          <div className='image_container'>
            <Image
              src={item?.url}
              layout='fill'
              objectFit='cover'
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className='coin_top'>
            <div className='coin_name'>
              <h2 className='coin_heading'>{item?.coinName}</h2>
              <p className='person'>By {item?.personName}</p>
            </div>
            <div className='image'>
              <Avatar className='profile' url={item?.avatar} />
            </div>
          </div>
          <div className='coin_bottom'>
            <button className='coin_btn'>Place A Bid</button>
            <p className='coin_price'>
              {item?.price} <span>ETH</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Coins
