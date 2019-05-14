var orm = require("../config/orm.js");

//update table name "burgers" within burgers_db
var burger = {

    // The variables cols and vals are arrays.
    // C of CRUD - Create - Add new burger to db
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    // R of CRUD - Read - Retrieve all burgers from db
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },
   // U of CRUD - Update - Change burger state to devoured in db
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });

    },
    // D of CRUD - Delete - Remove burger from db
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };





// Export the database functions for the controller (burger-controller.js).
module.exports = burger;