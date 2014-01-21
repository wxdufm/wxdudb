exports.prettyJsonKeys = function(json) {
  var pretty_json = {};
  Object.keys(json).forEach(function(key) {
    if (key.charAt(0) != '_') {
      var new_key = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
      pretty_json[new_key] = json[key];
    }
  });
  return pretty_json;
};
