import axios from 'axios'
import React, {Component} from 'react'
import Recipes from './components/Recipes'


class RecipeList extends Component{
    constructor(){
        super()
        this.state = {
            searchInput: '',
            displayRecipe: []
        }
    }

    componentDidMount(){
        axios.get('/api/recipe').then((res) => {
            this.setState({
                displayRecipe: res.data
            })
        })
    }


    render(){
        let mappedRecipe = []
        mappedRecipe = this.state.displayRecipe.map((recipe) => (
        <Recipes key={recipe.id} recipe={recipe} addToCookbook={this.props.addToCookbook}/>
        ))
        return(
            <div>
                <ul className='list'>{mappedRecipe}</ul>
            </div>
        )
    }

}

export default RecipeList
