import React, {Component} from 'react'

const Drinks = (props) => {
    return(
        <div onClick={() => {
            props.addDrink(props.drink)
    }}>
            <li className="drinks">
                <img src={props.drink.picture}/>
        

            </li>
        </div>
    )
}


export default Drinks