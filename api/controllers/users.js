'use strict';


const Users = require('../../database').users;

//------------------ /!\ ------------------//
// N'oubliez pas de rajouter la méthode pour chaque route.
// ----------------------------------------//
const users  = {

  // Find a user by name
  find : (req, res) => {
    Products.find({name: req.params.name})
    .then( data => {
      res.send('Operation completed ' + data);
    })
    .catch( err => {
      res.send('Operation failed :: ' + err)
    });
  },

  // create a new user
  create : (req, res) => {
    // var newUser = new UserSchema({ email: 'sdsjh.dhf@dhfg.com' })
    const newUser = new Users(req.body);
    newUser.save()
    .then ( data => {
      res.send(`Operation succeeded : \n ${data}`);
    })
    .catch ( err => {
      res.send('Operation failed : \n' + err);
    });
  }

}

module.exports = users;