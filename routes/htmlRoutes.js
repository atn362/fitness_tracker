var path = require("path");

module.exports = function(app) {
  // joins the exercise function through the relative path to the excercise.html page 
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // gets stats and joins to the stats html page
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};