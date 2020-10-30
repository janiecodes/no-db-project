import React, {Component} from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
    //lifecycle method - this will fire after the first invocation of render in the component. 
    //This is a great method for retrieving data from a server that you need in your component right away.
  }




  render(){
    return(
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}

export default App;
