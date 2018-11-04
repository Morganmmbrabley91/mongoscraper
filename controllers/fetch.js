var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No articles for today. Check When you return the next time.!"
          });
        }
        else {
          res.json({
            message: "Added " + dbHeadline.length + " new articles YAY!"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "Task Complete!!"
        });
      });
  }
};
