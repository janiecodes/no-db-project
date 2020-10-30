import React, {Component} from 'react'



class Recipes extends Component{
    constructor(props){
        super()
        this.state = {
            
          }
    }


    render(){
        return(
            <div>
                <li className="recipe" onClick={() => {this.props.addToCookbook(this.props.recipe.id)}}>
                    <h1>{this.props.recipe.name}</h1>
                    <h2>{this.props.recipe.ingredient}</h2>
                </li>
            </div>
        )
    }
}

export default Recipes