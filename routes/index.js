var express = require('express');
var router = express.Router();
var fs = require('fs');

/* More on this concept here:  http://stackoverflow.com/questions/35473025/how-to-let-external-json-for-jade-to-render-from-express/35473162 */

var renderFromJson = function(json_path, renderTemplate) {
    fs.readFile(json_path, function(err, data) {
        renderTemplate(JSON.parse(data));
    })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  renderFromJson('app/js/article.json', function(json_data) {
    res.render('index', json_data);
  })
});


module.exports = router;
