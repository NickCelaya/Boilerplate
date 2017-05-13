const app = require("./index.js")   //creating const app and setting it to require our index file which is express
const db = app.get("db")           //creating const db and having it equal app.get("db") is referencing our database
                                  //we brought in through the index file. when we say db.dosomething it refers to our db folder holding an sql file.

module.exports = {


  getGuns: function(req, res){
  db.get_firearms(function(err, response){
    res.status(200).send(response)  //[0]index zero returns AI 6.5 creedmoor
   })
  }






}
