import React from 'react'
import BaseCard from '../components/BaseCard'
import imgWoman from "../assets/images/image-about-our-mission-large.webp"
import imgFamily from "../assets/images/image-about-beyond-the-plate-large.webp"
import AboutCard from '../components/AboutCard'
import AboutCardPoint from '../components/AboutCardPoint'
import BrowseRecipesCard from '../components/BrowseRecipesCard'

const About = () => {
  return (
    <div>
      <div className='border-b border-black/10'>
        <BaseCard
          title="Help more people cook nourishing meals, 
            more often."
          desc="Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious."
          desc2="We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps."
          img={imgWoman}
        >
          <p className='text-preset-5 text-neutral-900 bg-orang-500 inline px-1 rounded'>Our mission</p>
        </BaseCard>
      </div>
      <div>
        <AboutCard
          title="Why we exist">
          <AboutCardPoint
            title="Cut through the noise."
            desc="The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking."
          />
          <AboutCardPoint
            title="Empower home kitchens."
            desc="When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep."
          />
          <AboutCardPoint
            title="Make healthy look good."
            desc="High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters."
          />

        </AboutCard>
      </div>
      <div>
        <AboutCard
          title="Whole ingredients first.">
          <AboutCardPoint
            title="Cut through the noise."
            desc="Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe."
          />
          <AboutCardPoint
            title="Flavor without compromise."
            desc="Spices, citrus, and natural sweetness replace excess salt, sugar, and additives."
          />
          <AboutCardPoint
            title="Respect for time."
            desc="Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful."
          />
          <AboutCardPoint
            title="Sustainable choices."
            desc="Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly."
          />

        </AboutCard>
      </div>
      <div>
        <BaseCard
          title="Beyond the plate"
          desc="We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:"
          desc2={`• Encourage family dinners and social cooking.
              • Reduce reliance on social single-use packaging and delivery waste.
              • Spark curiosity about seasonal produce and local agriculture.`}
          img={imgFamily}
        />
      </div>
      <BrowseRecipesCard/>


    </div>

  )
}

export default About