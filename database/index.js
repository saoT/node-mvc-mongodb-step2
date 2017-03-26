'use strict';

// Initialiser la connection
//------------------------------------------------//
const mongoose = require('mongoose');
// La lib promise de mongoose est deprecated
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

// Gérer les déconnection
mongoose.connection.on('error', err => {
  console.log('ERROR close MongoDB process', err);
});

mongoose.connection.on('connnected', function () {
  console.log('MongoDb connection success on  port 27017')
});

mongoose.connection.on('disconnected', function () {
  console.log('MongoDB process disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Server process terminated. Closing MongoDB');
    process.exit(0);
  });
});
//------------------------------------------------//

// Construire les models
//------------------ /!\ ------------------//
// N'oubliez pas d'importer chaque model créé.
// ----------------------------------------//
const users = require('./models/users');
const products = require('./models/products');

//------------------ /!\ ------------------//
// N'oubliez pas d'ajouter chaque model créé à db
// ----------------------------------------//
const db = {
  users: mongoose.model('Users', users),
  products: mongoose.model('Products', products)
}
//------------------------------------------------//

// db.users, db.products
module.exports = db;