import React, {Component} from 'react'

const Recipes = (props) => {
    return(
        <div onClick={() => {
            props.addRecipe(props.recipe)
    }}>
            <li className="recipes">
                <h1>{props.recipe.ingredient}</h1>
        

            </li>
        </div>
    )
}


export default Recipes