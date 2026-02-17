import React from 'react'
import fork from "../assets/images/pattern-fork.svg"
import knife from "../assets/images/pattern-knife.svg"

const BrowseRecipesCard = () => {
    return (

        <div className='relative bg-neutral-200 my-12 lg:mt-18 mb-16 text-center py-12 md:py-20 lg:py-24 px-4 rounded-3xl overflow-hidden '>
        <img className='hidden md:block absolute -bottom-10 -left-10 lg:w-xs' src={fork} alt="" width={200} />
        <img className='hidden md:block absolute -top-15 -right-5 lg:w-sm' src={knife} alt="" width={200} />
            <div className='lg:mx-60'>
                <h1 className='text-preset-2-mobile md:text-preset-2 text-neutral-900 mb-3 '>
                    Ready to cook smarter?
                </h1>
                <p className='text-preset-6 text-neutral-800'>
                    Hit the button, pick a recipe, and get dinner on the table—fast.
                </p>

            </div>
            <div>
                <button className='btn py-4 px-8 mx-auto mt-12  '>Browse recipes</button>
            </div>

        </div>

    )
}

export default BrowseRecipesCard