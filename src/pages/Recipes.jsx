import React from 'react'
import SectionHeader from '../components/SectionHeader'
import RecipeList from '../components/RecipeList'

const Recipes = () => {
  return (
    <div>
       <SectionHeader title="Explore our simple, healthy recipes" desc="Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye."/>
       <div>
       <RecipeList/>
       </div>
    </div>
    
  )
}

export default Recipes