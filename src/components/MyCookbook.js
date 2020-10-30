import React, {Component} from 'react'
import MyRecipes from './MyRecipes'

import axios from 'axios'

class MyCookbook extends Component {
    constructor(){
        super()
    }

    componentDidMount(){
        axios
            .get('/api/cookbook')
            .then((res) => {
                this.setState({
                    myCookbook: res.data
            })
        })
    }

    render(){
        let cookbookArray = []
        cookbookArray = this.props.myCookbook.map((recipe, index) => {
            return <MyRecipes
                key={`${recipe.ingredient}: ${index}`}
                recipe={recipe}
                deleteRecipe={this.props.deleteRecipe}
                editRecipeName={this.props.editRecipeName}
                addRecipe={this.props.addRecipe}
                index={index}
            />
    })
    return(
        <div>
            <ul className="list-of-recipes">{cookbookArray}</ul>
        </div>
        )
    }
}

export default MyCookbook