
import React from 'react'

const SectionHeader = ({ title, desc, children }) => {
    return (
        <div className='my-12 lg:mt-18 mb-16 lg:text-center  '>
            <div className='lg:mx-60'>
                <h1 className='text-preset-2-mobile md:text-preset-2 text-neutral-900 mb-3 '>
                    {title}
                </h1>
                <p className='text-preset-6 text-neutral-800'>
                    {desc}
                </p>

            </div>

            {children ??

                <div>
                    {children}
                </div>

            }
        </div>
    )
}

export default SectionHeader