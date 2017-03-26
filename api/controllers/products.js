'use strict';

const Products = require('../../database').products;

const products =  {

  find : (req, res) => {
    Products.find({name: req.params.name})
    .then( data => {
      res.send('Operation completed ' + data);
    })
    .catch( err => {
      res.send('Operation failed :: ' + err)
    });
  }

}

module.exports = products;