const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;
 
mongoose.connect(DB_URL);
var conn = mongoose.connection;             
 
module.exports = conn;