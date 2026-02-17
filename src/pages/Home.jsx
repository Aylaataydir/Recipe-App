import React from 'react'
import SectionHeader from '../components/SectionHeader'
import heroImg from "../assets/images/image-home-hero-large.webp"
import HomeFeaturesItem from '../components/HomeFeaturesItem'
import img1 from "../assets/images/icon-whole-food-recipes.svg"
import img2 from "../assets/images/icon-minimum-fuss.svg"
import img3 from "../assets/images/icon-search-in-seconds.svg"
import imgBuilt from "../assets/images/image-home-real-life-large.webp"
import BaseCard from '../components/BaseCard'
import Footer from '../components/Footer'
import BrowseRecipesCard from '../components/BrowseRecipesCard'



const Home = () => {
  return (
    <div className=" " >

      {/* HEADER */}

      <SectionHeader
        title={
          <>
            <span className='relative'>
              <span className='relative z-10'>Healthy </span>
              <div className='absolute bg-orang-500/40 w-36 h-8 bottom-0 -left-1 rounded -z-100'></div>
            </span>
            meals, zero fuss
          </>}
        desc="Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.">
        <div>
          <button className='btn py-4 px-8 mx-auto mt-10 mb-10 lg:mb-20  '>Start exploring</button>
          <img className='p-0 rounded-2xl' src={heroImg} alt="" />
        </div>
      </SectionHeader>


      {/* FEATURES CARDS  */}

      <div>
        <h2 className='text-preset-2-mobile md:text-preset-2 mb-8 md:mb-12 lg:text-center'>What you’ll get</h2>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 md:border-b border-neutral-400/50 '>
          <HomeFeaturesItem
            img={img1}
            title="Whole-food recipes"
            desc="Each dish uses everyday, unprocessed ingredients."
          />
          <HomeFeaturesItem
            img={img2}
            title="Minimum fuss"
            desc="All recipes are designed to make eating healthy quick and easy."
          />
          <HomeFeaturesItem
            img={img3}
            title="Search in seconds"
            desc="Filter by name or ingredient and jump straight to the recipe you need."
          />
        </div>


        {/* BUILT FOR LIFE SECTION  */}

        <BaseCard
          img={imgBuilt}
          title="Built for real life"
          desc={
            <>
              Cooking shouldn’t be complicated. These recipes come in under
              <span className="relative">
                <span className="relative "> 30 minutes
                </span>
                <div className='absolute bg-orang-500 w-25 h-3 bottom-0 left-1 rounded -z-100'></div>
              </span> of active time, fit busy schedules, and taste good enough to repeat.
            </>
          }
          desc2="Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered."
        />
      </div>

      {/* browse recipe section  */}

      <BrowseRecipesCard />

      {/* FOOTER  */}

      <Footer />


    </div>
  )
}

export default Home