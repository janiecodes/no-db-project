const drinks = require('./drinks.json')

let myDrink = []

module.exports = {
    getList: (req, res) => {
        res.status(200).send(drinks)
    },
    
    getMyDrink: (req, res) => {
        res.status(200).send(myDrink)
    },

    addDrink: (req, res) => {
        const {body} = req

        myDrink.push(body)

        res.status(200).send(myDrink);
    },

    editDrinkName: (req, res) => {
        const {index} = req.params
        const {name} = req.body

        myDrink[index].name = name;

        res.status(200).send(myDrink)
    },

    deleteDrink: (req, res) => {
        const {index} = req.params

        myDrink.splice(index,1)

        res.status(200).send(myDrink)
    }
}