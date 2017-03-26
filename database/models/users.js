'use strict';

const {Schema} = require('mongoose');

const Users = new Schema({
  mail: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  }
});

Users.pre('save', function (next) {  
  const salt = bcrypt.genSaltSync(10);

  if (this.isModified('password') || this.isNew) {
    const hash = bcrypt.hash(this.password + this.mail, salt);
    this.password = hash;
    next();
  }

  else {
    next();
  }
});

module.exports = Users;
