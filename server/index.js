const express = require('express'),
    app = express(),
    port = 3012,
    ctrl = require('./controller.js');

//TOP LEVEL MIDDLEWARE
app.use(express.json())

//ENDPOINTS
app.get('/api/amongus', ctrl.getList)
// app.get('/api/recipe/:ingredient', ctrl.getOneRecipe); 
app.get('/api/drinks', ctrl.getMyDrink)
app.post('/api/drinks', ctrl.addDrink);
app.put('/api/drinks/:index', ctrl.editDrinkName);
app.delete('/api/drinks/:index', ctrl.deleteDrink);

app.listen(port, () => console.log(`Server is listening on ${port}`))