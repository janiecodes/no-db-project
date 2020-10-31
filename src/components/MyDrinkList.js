import React, {Component} from 'react'
import MyDrink from './MyDrink'

import axios from 'axios'

class MyDrinkList extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        axios
            .get('/api/drinks')
            .then((res) => {
                this.setState({
                    myDrink: res.data
            })
        })
    }

    render(){
        let drinkArray = []
        drinkArray = this.props.myDrinkList.map((drink, index) => {
            return <MyDrink
                key={`${drink.ingredient}: ${index}`}
                drink={drink}
                deleteDrink={this.props.deleteDrink}
                editDrinkName={this.props.editDrinkName}
                addDrink={this.props.addDrink}
                index={index}
            />
    })
    return(
        <div>
            <ul className="list-of-my-drinks">{drinkArray}</ul>
        </div>
        )
    }
}

export default MyDrinkList