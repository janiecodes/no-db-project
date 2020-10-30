import React, {Component} from 'react'
import Recipes from './Recipes'

import axios from 'axios'

class RecipeList extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            searchInput: '',
            displayRecipe: []
        }
    }

    componentDidMount(){
        axios
            .get('/api/recipe')
            .then((res) => {
                this.setState({
                    displayRecipe: res.data
            })
        })
    }

    handleInput = (e) => {
        this.setState({searchInput: e.target.value})
        axios
            .get(`/api/recipe?search=${e.target.value}`)
            .then((res) => {
                this.setState({displayRecipe:res.data})
            })
            .catch((error) => console.log(error))
    }


    render(){
        let mappedRecipe = []
        mappedRecipe = this.state.displayRecipe.map((recipe) => (
        <Recipes 
            key={recipe.ingredient} 
            recipe={recipe} 
            addRecipe={this.props.addRecipe}/>
        ))
        return(
            <div>
                <input value={this.state.searchInput} onChange={this.handleInput}/>
                <button onClick={this.handleInput}>Search</button>
                <ul className='list'>{mappedRecipe}</ul>
            </div>
        )
    }

}

export default RecipeList
