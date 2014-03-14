var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReleaseSchema = new Schema({
  artist: {type: String, required: true},
  title: {type: String, required: true},
  label: {type: String},
  status: {type: String, required: true},
  playlist_date: {type: Date},
  date_received: {type: Date, default: Date.now},
  library_genre: {type: String},
  charts_subgenre: {type: String},
  charts_genre: {type: String},
  reviewer: {type: String},
  medium: {type: String},
});

module.exports = mongoose.model('Release', ReleaseSchema);
