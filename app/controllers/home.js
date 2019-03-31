const express = require("express");

const router = express.Router();

const models = require("../models");


router.get("/", async function(req, res) {
  const results = await models.session.findAll({ attributes: ['session_id', 'name']});
 // console.log(results.slice(0, 4));

  return res.render("home/index", {
    sessions: results
  });
});

router.post("/", async function(req, res) {

  models.sequelize.transaction(t => {

    // chain all your queries here. make sure you return them.
    return models.session.create({
      name: req.body.name
    });
  
  }).then(async result => {
    // Transaction has been committed
    // result is whatever the result of the promise chain returned to the transaction callback
    const results = await models.presentation.findAll({ where:{ session_id: req.body.session_id}, attributes:['session_id', 'url', 'presentation_id', 'position']});


  return res.render("session", {
    presentations: results
  });
  }).catch(err => {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
    console.log("ERROR:");
    console.log(err);
  });

})

module.exports = router;
