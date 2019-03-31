const controllers = require("./controllers");
const config = require("../config");

// Where to find the different HTTP responses: like GET, PUT, etc
// this says "ok, / is mapped to all the requests in controllers.home"
// website.com/session is mapped to all the requests in controllers.session
// so if I make a get request for / in conmtrollers.session, it's REALLY web.com/session/
module.exports.registerRoutes = app => {
  app.use("/", controllers.home);
  app.use("/auth", controllers.auth);
  app.use("/session", controllers.session);

  app.use("/tutorial", controllers.tutorial);
};

module.exports.registerErrorHandlers = app => {
  app.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(err.status || 500);
    res.render("500", {
      message: err.message,
      error: config.env === "development" ? err : {}
    });
  });
};
