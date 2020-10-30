import React, {Component} from 'react'
import MyRecipes from './MyRecipes'



const MyCookbook = (props) => {
    const recipeArray = props.myCookbook.map((recipe, index) => (
        <MyRecipes
        key={`${recipe.id}: ${index}`}
        recipe={recipe}
        deleteRecipe={props.deleteRecipe}
        editRecipeName={props.editRecipeName}
        index={index}
    />
    ))
    return(
        <div>
            <ul className="list-of-recipes">{recipeArray}</ul>
        </div>
        )

}

export default MyCookbook