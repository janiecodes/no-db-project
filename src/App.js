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
  }

  componentDidMount(){
    axios
    .get('/api/cookbook')
    .then((res) => {
      this.setState({myCookbook: res.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  addRecipe = (ingredient) => {
    axios
      .get(`/api/cookbook/${ingredient}`)
      .then(res => {
      this.setState({myCookbook: res.data})
    })
      .catch((error) => console.log(error))
  }

  deleteRecipe = (index) => {
    axios
      .delete(`/api/cookbook/${index}`)
      .then((res) => {
      this.setState({myCookbook: res.data})
     })
      .catch((error) => console.log(error))
  }

  editRecipeName = (index, name) => {
    axios
    .put(`/api/cookbook/${index}`, {name})
    .then((res) => {
      this.setState({myCookbook: res.data})
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
          myCookbook={this.state.myCookbook}
          deleteRecipe={this.deleteRecipe}
          editRecipeName={this.editRecipeName}
          />
          <RecipeList addRecipe={this.addRecipe}
          />
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
