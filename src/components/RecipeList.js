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
        <Recipes key={recipe.id} recipe={recipe} addToCookbook={this.props.addRecipe}/>
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
