import React, {Component} from 'react'
import Drinks from './Drinks'

import axios from 'axios'

class DrinkList extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            searchInput: '',
            displayDrink: []
        }
    }

    componentDidMount(){
        axios
            .get('/api/amongus')
            .then((res) => {
                this.setState({
                    displayDrink: res.data
            })
        })
    }

    handleInput = (e) => {
        this.setState({searchInput: e.target.value})
        axios
            .get(`/api/amongus?search=${e.target.value}`)
            .then((res) => {
                this.setState({displayDrink:res.data})
            })
            .catch((error) => console.log(error))
    }


    render(){
        let mappedDrink = []
        mappedDrink = this.state.displayDrink.map((drink) => (
        <Drinks 
            key={drink.id} 
            drink={drink} 
            addDrink={this.props.addDrink}/>
        ))

        console.log(this.props)
        return(
            <div>
                {/* <input value={this.state.searchInput} onChange={this.handleInput}/>
                <button onClick={this.handleInput}>Search</button> */}
                <ul className='list'>{mappedDrink}</ul>
            </div>
        )
    }

}

export default DrinkList
