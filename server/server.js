const cors = require('cors');
const express = require('express')

const app = express()

app.use(cors());

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var houseRouter = require('./Routes/house.routes');

app.use('/api/house', houseRouter);

app.listen(5000, () => {console.log("Server started on port 5000")})