var dateToHTMLValue = function(date) {
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
};

module.exports = {
  'dateToHTMLValue': dateToHTMLValue,
};
