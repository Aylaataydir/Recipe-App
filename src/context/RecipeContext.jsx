import React, { createContext, useEffect, useState } from 'react'
import data from "../helper/data.json"


const RecipeContext = createContext()

export const RecipeProvider = ({children}) => {

const [recipes, setRecipes] = useState(data)


console.log(recipes)
console.log(data)


    
  return (
    <RecipeContext.Provider value={{recipes}}>
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeContext