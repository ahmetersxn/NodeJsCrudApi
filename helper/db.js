const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://admin:394216Ae@ds121026.mlab.com:21026/heroku_2wx4p0bv',{ useMongoClient: true});

    mongoose.connection.on('open', () => {
         console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};
