const drinks = require('./drinks.json')

let myDrink = []

//console.log(recipes[0].name) = VODKA SHOT

module.exports = {
    getList: (req, res) => {
        res.status(200).send([...drinks])
        const {search} = req.query
        let responseArray = []

        if(search){
            responseArray = drinks.filter((drink) => 
                drink.ingredient.toLowerCase().includes(search.toLowerCase())
            )
        }else{
            responseArray = [...drinks]
        }
        return res.status(200).send(responseArray)
    },
     
    //This method will send the cookbook array to the client side
    // getOneRecipe: (req, res) => {
    //     const {ingredient} = req.params
    //     const foundRecipe = recipes.find((recipe) => recipe.ingredient === ingredient)

    //     if(!foundRecipe){
    //         res.status(400).send("Recipe not found")
    //     }
    //     res.status(200).send(foundRecipe)
    // },
    
    getMyDrink: (req, res) => {
        res.status(200).send(myDrink)
    },

    //This method will take req.body.recipe object add an id to it and then push it to the cookbook array
    //it then increments the id variable to keep id's unique and then sends the cookbook array to the client side
    addDrink: (req, res) => {
        const {body} = req
        myDrink.push(body)
        res.status(200).send(myDrink);
    },

    //This method takes in an id parameter to find the item to be updated with findIndex. 
    //Once the index is found, access the object using bracket notation and re-assign

    editDrinkName: (req, res) => {
        const {index} = req.params
        const {name} = req.body

        myDrink[index].name = name;
        // console.log(myCookbook[index])
        res.status(200).send(myDrink)
    },

    deleteDrink: (req, res) => {
        const {index} = req.params

        myDrink.splice(index,1)

        res.status(200).send(myDrink)
    }

}