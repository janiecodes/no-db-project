import React, {Component} from 'react'

const Recipes = (props) => {
    return(
        <div onClick={() => {
            props.addRecipe(props.recipe)
    }}>

        {console.log(props.recipe)}
            <li className="recipes">
                <h1>{props.recipe.name}</h1>
        

            </li>
        </div>
    )
}


export default Recipes