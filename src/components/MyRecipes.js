import React, {Component} from 'react'

class MyRecipes extends Component{
    constructor(props){
        super(props)

        this.state = {

          }
    }


    render(){
        return( 
            <div>
                <li className="my-recipe" 
                    onCliCk={() => {
                    this.props.addRecipe(this.props.recipe)
            }}>
                <h1>{this.props.recipe.name}</h1>
        

            </li>
            </div>
        )
    }
}

export default MyRecipes