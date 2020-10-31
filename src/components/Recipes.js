import React, {Component} from 'react'

const Recipes = (props) => {
    return(
        <div onClick={() => {
            props.addRecipe(props.recipe)
    }}>
            <li className="recipes">
                <img src={props.recipe.picture}/>
        

            </li>
        </div>
    )
}


export default Recipes