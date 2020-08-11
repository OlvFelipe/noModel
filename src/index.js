const express = require('express');
const cors = require('cors');
const products = require('./routes/productRoute')
const app = express();

app.use(cors());
app.use(express.json());

app.use('/produtos', products);

app.listen(3333, (err) => {
    if(err) {
        console.log("Deu ruim no servidor ", JSON.stringify(err));
    } else {
        console.log("Servidor da NASA voando");
    }
})