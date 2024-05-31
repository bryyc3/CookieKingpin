require('dotenv').config();

const express = require('express');
const path = require('path');


const app = express();
const pubDir = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(pubDir));

app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));
app.use('/products', require('./routes/products'));
app.use('/checkout', require('./routes/checkout'));

app.listen(5200, () =>{
    console.log("server on port 5500");
})