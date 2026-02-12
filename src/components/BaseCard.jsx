import React from 'react'

const BaseCard = ({ img, title, desc, desc2, children }) => {
  return (
    <div className=' lg:flex mt-10 md:mt-20 lg:mt-24'>
      <div className=''>
        <h3 className='text-preset-2-mobile md:texxt-preset-2 text-neutral-900 mb-5 '>{title}</h3>
        <p className='text-preset-6 text-neutral-800 mb-5'>{desc}</p>
        <p className='text-preset-6 text-neutral-800 mb-10'>{desc2}</p>
      </div>
      <img className='flex-1 rounded-3xl' src={img} alt="" />
    </div>
  )
}

export default BaseCard