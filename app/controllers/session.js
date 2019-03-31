const express = require("express");

const router = express.Router();

const models = require("../models");


router.get("/:sessionId", async function(req, res) {
  const results = await models.presentation.findAll({ where:{ session_id: req.params["sessionId"]}, attributes:['session_id', 'name', 'url', 'presentation_id', 'position']});

  const sessionr = await models.session.findAll({where:{session_id: req.params["sessionId"]}, attributes:['session_id', 'name']});

  console.log(sessionr);

  return res.render("session", {
    presentations: results,
    session: sessionr[0]
  });
});

router.post("/", async function (req, res) {
  var vposition = req.body.position + 3;

  models.sequelize.transaction(t => {

    // chain all your queries here. make sure you return them.
    return models.presentation.create({
      session_id: req.body.session_id,
      name: req.body.name,
      url: req.body.url,
      position: vposition
    });
  
  }).then(async result => {
    // Transaction has been committed
    // result is whatever the result of the promise chain returned to the transaction callback
    const results = await models.presentation.findAll({ where:{ session_id: req.body.session_id}, attributes:['session_id', 'name', 'url', 'presentation_id', 'position']});

    const sessionr = await models.session.findAll({where:{session_id: req.body.session_id}, attributes:['session_id', 'name']});

    return res.render("session", {
      presentations: results,
      session: sessionr[0]
    });
  }).catch(err => {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
    console.log("ERROR:");
    console.log(err);
  });



  //console.log('request is:');
  //console.log(req);

  
});

module.exports = router;
