const express = require('express');
const app =express();
const PORT =8000;
const planetRouter = require('./routes/planets/planets.routes');



app.use(express.json());


app.use(planetRouter);

app.listen(PORT,()=>{
    console.log(`Listing on the PORT ${PORT}`);
});