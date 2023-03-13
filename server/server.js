const express = require('express');
const app =express();
const path = require('path');
const PORT =8000;
const planetRouter = require('./routes/planets/planets.routes');



app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(planetRouter);

app.listen(PORT,()=>{
    console.log(`Listing on the PORT ${PORT}`);
});