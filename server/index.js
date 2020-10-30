const express = require('express'),
    app = express(),
    port = 3012,
    ctrl = require('./controller.js');

//TOP LEVEL MIDDLEWARE
app.use(express.json())

//ENDPOINTS
app.get('/api/recipe', ctrl.getRecipeList)
// app.get('/api/recipe/:ingredient', ctrl.getOneRecipe); 
app.get('/api/cookbook', ctrl.getMyCookbook)
app.post('/api/cookbook', ctrl.addRecipe);
app.put('/api/cookbook/:index', ctrl.editRecipeName);
app.delete('/api/cookbook/:index', ctrl.deleteRecipe);

app.listen(port, () => console.log(`Server is listening on ${port}`))