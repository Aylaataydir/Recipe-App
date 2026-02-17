import React from 'react'
import icon from "../assets/images/icon-bullet-point.svg"

const AboutCardPoint = ({ title, desc }) => {
    return (
        <div className='mb-6 md:mb-8 lg:mb-12'>
            <h3 className='text-preset-4 flex items-center gap-5'><img src={icon} alt="" />{title}</h3>
            <p className='text-preset-6 text-neutral-800'>{desc}</p>
        </div>
    )
}

export default AboutCardPoint