import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import './App.css';
import DrinkList from './components/DrinkList'
import MyDrinkList from './components/MyDrinkList'


class App extends Component {
  constructor(){
    super()

    this.state = {
      myDrinkList: []
    }
  }

  componentDidMount(){
    axios
    .get('/api/drinks')
    .then((res) => {
      this.setState({myDrinkList: res.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  addDrink = (ingredient) => {
    console.log(ingredient)
    axios
      .post(`/api/drinks/`, ingredient)
      .then(res => {
      this.setState({myDrinkList: res.data})
      })
      .catch((error) => console.log(error))
  }

  deleteDrink = (index) => {
    axios
      .delete(`/api/drinks/${index}`)
      .then((res) => {
      this.setState({myDrinkList: res.data})
     })
      .catch((error) => console.log(error))
  }

  editDrinkName = (index, name) => {
    console.log(index)
    console.log(name)
    axios
    .put(`/api/drinks/${index}`, {name})
    .then((res) => {
      this.setState({myDrinkList: res.data})
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
          <DrinkList
          // myCookbook={this.state.myCookbook}
          addDrink={this.addDrink}
          // deleteRecipe={this.deleteRecipe}
          // editRecipeName={this.editRecipeName}
          />

          <MyDrinkList
            myDrinkList={this.state.myDrinkList}
            deleteDrink={this.deleteDrink}
            editDrinkName={this.editDrinkName}

          />
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
