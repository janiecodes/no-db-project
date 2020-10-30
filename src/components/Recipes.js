import React, {Component} from 'react'

const Recipes = (props) => {
    return(
        <div>
            <li className="recipes" onCliCk={() => {
                    props.addRecipe(props.recipe.id)
            }}>
                <h1>{props.recipe.name}</h1>

            </li>
        </div>
    )
}


export default Recipes