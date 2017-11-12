const {createJWTForUser, checkSinginInput} = require('../utils.js');
const User = require('../DB/Models').UserModel;


function signup(req, res){
  var email = req.body.email;
  var password = req.body.password;
  var check = checkSinginInput(email, password);
  
  console.log("the req for signup is  ", email, password)

  if (check != false) {
    res.send({error: "You need a valid email and a 6 character length password."});
  
  } else {
    User.findOne({email}).then(user => {
  
      if (user != null){
        res.send({error: 'Email already registered.'});
      } else {
        var newUser = new User({email, password});
        
        newUser.save().then(createdUser => {
          //create token and send to FE
          res.json({token: createJWTForUser(createdUser)});

        }).catch(error => {
          console.log("The error from saving a new user is ", error);       
        });
      }
    }).catch(error => {
      console.log("The error inside signup controller is ", error);
    });
  }
}

function signin(req, res){
  var user = req.user; //Passport supplies user in req.user from Done() in localStrategy
  
  //create token and send to FE
  res.json({token: createJWTForUser(user)});
  
}

module.exports = {
  signup,
  signin
}