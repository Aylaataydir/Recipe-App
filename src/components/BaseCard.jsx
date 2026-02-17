import React from 'react'

const BaseCard = ({ img, title, desc, desc2, children }) => {
  return (
    <div className=' lg:flex gap-12 items-center mt-10 md:mt-20 my-16 md:my-20 lg:my-24'>
      <div>
        {children && 
        <div className='mb-6'>
          {children}
        </div>
         }
        <h3 className='text-preset-2-mobile md:texxt-preset-2 text-neutral-900 mb-5 '>{title}</h3>
        <p className='text-preset-6 text-neutral-800 mb-5'>{desc}</p>
        <p className='text-preset-6 text-neutral-800 mb-10 whitespace-pre-line'>{desc2}</p>
      </div>
      <div>
        <img className='rounded-3xl' src={img} alt="" />
      </div>

    </div>
  )
}

export default BaseCard