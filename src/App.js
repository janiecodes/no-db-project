import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import './App.css';
import RecipeList from './components/RecipeList'
import MyCookbook from './components/MyCookbook'


class App extends Component {
  constructor(){
    super()
    this.state = {
      myCookbook: []
    }
    this.addToCookbook = this.addToCookbook.bind(this)
  }

  componentDidMount(){
    //lifecycle method - this will fire after the first invocation of render in the component. 
    //This is a great method for retrieving data from a server that you need in your component right away.
    axios
    .get('/api/cookbook')
    .then((res) => {
      this.setState({team: res.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  addRecipe(id){
    axios
      .get(`/api/cookbook/${id}`)
      .then(res => {
      recipe = res.data
    })
      .catch((error) => console.log(error))
    
      if(recipe.name){
        this.setState({myCookbook: [...this.state.myCookbook, recipe]})
      }
  }

  deleteRecipe = (index) => {
    axios
      .delete(`/api/cookbook/${index}`)
      .then((res) => {
      this.setState({team: res.data})
     })
      .catch((error) => console.log(error))
  }

  editRecipeName = (index, name) => {
    axios
    .put(`/api/cookbook/${index}`, {name})
    .then((res) => {
      this.setState({team: res.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render(){
    return(
      <div>
        <Header/>
        <main className="main-box">
          <MyCookbook
          cookbook={this.state.myCookbook}
          removeFromCookbook={this.removeFromCookbook}
          editRecipeName={this.editRecipeName}/>
          <RecipeList addToCookbook={this.addToCookbook}/>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
