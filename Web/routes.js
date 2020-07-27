const express = require('express');
const auth = require('../Routes/auth');
const home = require('../Routes/home');
const manga = require('../Routes/manga');
const genre = require('../Routes/genre');
const userProfile = require('../Routes/userProfile');
const registerUser = require('../Routes/registerUser');
const error = require('../Middleware/error');

module.exports = function(app){
    app.use(express.json());
    app.use('/', home);
    app.use('/api/manga', manga);
    app.use('/api/genre', genre);
    app.use('/api/user', userProfile);
    app.use('/api/register', registerUser);
    app.use('/api/auth', auth);
    app.use(error);
}