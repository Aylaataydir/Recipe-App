import React from 'react'
import insta from "../assets/images/icon-instagram.svg"
import tiktok from "../assets/images/icon-tiktok.svg"
import bluesky from "../assets/images/icon-bluesky.svg"

const Footer = () => {
  return (
    <div className="pb-12 px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 justify-center items-center ">
      <div>
        <p>Made with ❤️ and 🥑</p>
      </div>
      <div className="flex gap-6 ">
        <img src={insta} alt="" />
        <img src={bluesky} alt="" />
        <img src={tiktok} alt="" />
      </div>
    </div>
  )
}

export default Footer