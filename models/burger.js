// Inside burger.js, import orm.js into burger.js
const orm = require('../config/orm.js');

// Also inside burger.js, create the code that will call the ORM functions 
// using burger specific input for the ORM.
const burger = {
    selectAll(cb) {
      orm.all('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
      orm.insert('burgers', cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
      orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
    
  };
  
// Export at the end of the burger.js file.
  module.exports = burger;

