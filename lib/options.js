var fs = require('fs');

var Options = function(optionType) {
  var _that = this;
  fs.readFile('config/' + optionType + '.json', function (err, data) {
    if (err)
      return console.log(err);
    _that.options = JSON.parse(data);
  });
}

Options.prototype.isValid = function(option) {
  return this.options.indexOf(option) > -1;
}

Options.prototype.validOptions = function() {
  return this.options.slice();
}

module.exports = Options;
