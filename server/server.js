const express = require('express')
const app = express()

var houseRouter = require('./Routes/house.routes');

app.use('/api/house', houseRouter);

app.listen(5000, () => {console.log("Server started on port 5000")})