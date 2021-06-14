var path = require("path");

module.exports = function(app) {
  // Called when "Countinue Workout" or "new Workout" is clicked in index.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // gets stats and joins to the stats html page
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};