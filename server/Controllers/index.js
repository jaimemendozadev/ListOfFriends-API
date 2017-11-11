const User = require('../DB/Models').UserModel;

function authenticate(req, res, next){
  console.log("User authenticated");
}

function signup(req, res){
  var email = req.body.email;
  var password = req.body.password;
  
  User.findOne({email}).then(user => {
    console.log("The found user is ", user);

    if (user != null){
      res.send({error: 'Email already registered.'});
    } else {
      var newUser = new User({email, password});
      
      newUser.save().then(createdUser => {
        console.log("The createdUser is ", createdUser)
        
        res.send(createdUser);
    
      }).catch(error => {
        console.log("The error from saving a new user is ", error);       
      });
    }
  }).catch(error => {
    console.log("The error inside signup controller is ", error);
  });
}

function login(req, res, next){

}

function encryptPassword(){

}

module.exports = {
  authenticate,
  signup,
  login
}