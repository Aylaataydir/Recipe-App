import React from 'react'

const HomeFeaturesItem = ({ img, title, desc }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h3 className='text-preset-3 text-neutral-900 mt-4 mb-3 '>{title}</h3>
      <p className='text-preset-6 mb-6 md:mb-8 lg:mb-24 '>{desc}</p>

    </div>
  )
}

export default HomeFeaturesItem