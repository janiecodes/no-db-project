import React, {Component} from 'react'
import MyRecipes from './MyRecipes'

import axios from 'axios'

class MyCookbook extends Component {
    constructor(){
        super()

        this.state = {
            displayMyCookbook: []
        }
    }

    componentDidMount(){
        axios
            .get('/api/cookbook')
            .then((res) => {
                this.setState({
                    displayMyCookbook: res.data
            })
        })
    }
    
    render(){
        let cookbookArray = []
        cookbookArray = this.state.displayMyCookbook.map((recipe, index) => (
            <MyRecipes
                key={`${recipe.ingredient}: ${index}`}
                recipe={recipe}
                deleteRecipe={this.props.deleteRecipe}
                editRecipeName={this.props.editRecipeName}
                index={index}
            />
        ))
    return(
        <div>
            <ul className="list-of-recipes">{cookbookArray}</ul>
        </div>
        )
    }
}

export default MyCookbook