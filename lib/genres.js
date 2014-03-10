var fs = require('fs');

var validGenres;

fs.readFile('config/genres.json', function (err, data) {
  if (err)
    return console.log(err);
  validGenres = JSON.parse(data);
});

exports.isValidGenre = function(genre) {
  return validGenres.indexOf(genre) > -1;
}

exports.validGenres = function() {
  return validGenres.slice();
}
