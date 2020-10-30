const express = require('express'),
app = express(),
port = 3012,
ctrl = require('./controller.js');

//TOP LEVEL MIDDLEWARE
app.use(express.json())

//ENDPOINTS
app.get(XXXX, ctrl.getRecipeList)
app.get(XXXX/:id, ctrl.getRecipe);
app.get(XXXX)
app.post(XXXX/:id, ctrl.addRecipe);
app.put(XXXX/:id, ctrl.editRecipeName);
app.delete(XXXX/:id, ctrl.deleteRecipe)

app.listen(port, () => console.log(`Server is listening on ${port}`))