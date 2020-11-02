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
            .catch((error) => console.log(error))
    }

    render(){
        let drinkArray = []
        const {myDrinkList, deleteDrink, editDrinkName, addDrink} = this.props
        drinkArray = myDrinkList.map((drink, index) => {
            return <MyDrink
                key={`${drink.ingredient}: ${index}`}
                drink={drink}
                deleteDrink={deleteDrink}
                editDrinkName={editDrinkName}
                addDrink={addDrink}
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