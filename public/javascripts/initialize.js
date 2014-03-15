initializers = [];

$(function() {
  for (var i = 0; i < initializers.length; i++) {
    var item = initializers[i],
      $selector = $(item[0]),
      func = item[1];
    if ($selector.length > 0) {
      func.call($selector);
    }
  }
});

window.initialize = function(selector, action) {
  initializers.push([selector, action]);
};
