var mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect(process.env.'mongodb://admin:p12345@ds123434.mlab.com:23434/salty-fortress-95472' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};  