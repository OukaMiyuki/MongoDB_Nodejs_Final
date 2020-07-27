const winston = require('winston');
const express = require('express');
const app = express();
require('dotenv').config();
require('./Logger/logger')();
require('./Web/routes')(app);
require('./Database/db')();

let key = process.env.jwtPrivateKey;
if(!key){
    throw new Error('Private Key is not defined!');
}
  
const port = 3000
app.listen(port, () => {
    winston.info(`Server started on port ${port}...`);
});