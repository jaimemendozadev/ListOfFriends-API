require("dotenv").load();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('./Models').UserModel;


function dropDB(){
  const DB_URL = process.env.DB_URL;
  
  mongoose.connect(DB_URL);
 
  const conn = mongoose.connection;   

  console.log("About to drop database");

  User.remove({}).then(result => {
    console.log("Successfully dropped Users.");
    conn.close();
  })
  .catch(error => {
    console.log("There was an error deleting the users ", error);
    conn.close();
  });
}

dropDB();


