const express = require("express");

const router = express.Router();

const models = require("../models");


router.get("/", async function(req, res) {
  const results = await models.session.findAll({ attributes: ['session_id', 'name']});
  console.log(results.slice(0, 4));

  return res.render("home/index", {
    sessions: results
  });
});

module.exports = router;
