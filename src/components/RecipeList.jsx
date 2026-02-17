import React, { useContext } from 'react'
import RecipeContext from '../context/RecipeContext'
import RecipeCard from './RecipeCard'

const RecipeList = () => {

    const { recipes } = useContext(RecipeContext)

    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipeList