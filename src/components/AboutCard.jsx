import React from 'react'

const AboutCard = ({ title, children }) => {
  return (
    <div className=' lg:flex gap-12  border-b border-black/10 lg:pt-24 lg:pb-12'>
      <div className=' flex-2 text-preset-2 mt-12 md:mt-20 lg:mt-0   mb-10'>
        {title}
      </div>
      <div className='flex-3 '>
        {children}
      </div>
    </div>
  )
}

export default AboutCard