import React, { createContext } from 'react'


const RecipeContext = createContext()

const RecipeProvider = ({children}) => {


    
  return (
    <RecipeContext.Provider value={{}}>
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeContext