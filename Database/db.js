const mongoose = require('mongoose');
const winston = require('winston');
module.exports = function(){
    const mongoDB = 'mongodb://localhost/mangaApp';
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex:true })
        .then(() => winston.info('Connected to MongoDB!'));
        //.catch(err => console.error('Could not connect to MongoDB Server : ', err));
}