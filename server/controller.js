const axios = require('axios')
const recipes = require('./recipes.json')

let myCookbook = []



module.exports = {
    //if no query, return all recipes
    //if query, filter recipes based on search
    getRecipeList: (req, res) => {
        const {search} = req.query
        const {responseArray} = []

        if(search){
            const filteredRecipes = recipes.filter((recipe) => 
                recipe.name.toLowerCase().includes(search.toLowerCase())
            )
            for(let i =0; i < filteredRecipes.length; i++){
                responseArray.push(filteredRecipes[i])
            }
        }else{
            for(let i =0; i < filteredRecipes.length; i++){
                responseArray.push(recipes[i]);
            }
        }
        return res.status(200).send(responseArray)
    },
     
    //This method will send the cookbook array to the client side
    getRecipe: (req, res) => {
        const {id} = req.params
        const foundRecipe = recipes.find(recipe => recipe.id === +id)

        if(!foundRecipe){
            res.status(400).send("Recipe not found")
        }
        res.status(200).send(foundRecipe)
    },
    

    //This method will take req.body.recipe object add an id to it and then push it to the cookbook array
    //it then increments the id variable to keep id's unique and then sends the cookbook array to the client side
    addRecipe: (res, req) => {
        const {recipe} = req.body;

        recipe.id = id;
        id++;

        myCookbook.push(recipe);
        res.status(200).send(myCookbook);
    },

    //This method takes in an id parameter to find the item to be updated with findIndex. 
    //Once the index is found, access the object using bracket notation and re-assign

    editRecipeName: (req, res) => {

    },

    deleteRecipe: (req, res) => {

    }




}