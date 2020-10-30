import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import './App.css';
import Recipes from './components/Recipes'


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
  }

  addToCookbook(id){
    let recipe = {}
    axios
      .get(`/api/recipe/${id}`)
      .then(res => {
      recipe = res.data
    })
      .catch((error) => console.log(error))
    
      if(recipe.name){
        this.setState({myCookbook: [...this.state.myCookbook, recipe]})
      }
  }


  render(){
    return(
      <div>
        <Header/>
        <main className="main-box">
          <Recipes/>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
