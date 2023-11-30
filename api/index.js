const express = require('express');
const config = require('../config');
const user = require('./components/users/network.user');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


//ROUTER
app.use('/api/user',user);

app.listen(config.api.port,()=>{
    console.log('Estamos en el servidor', config.api.port);
});

