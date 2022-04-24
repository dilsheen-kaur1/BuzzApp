const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dilsheen16:dil16kaur@cluster0.yqvfu.mongodb.net/BuzzApp?retryWrites=true&w=majority')

mongoose.connection.on('error', (err) => {
    console.log('connection failed');
})
mongoose.connection.on('connected', () => {
    console.log('successfully connected to database');
})