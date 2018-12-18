var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  id: Schema.Types.ObjectId,
  title: String,
  content:String,
  published:String
});

// Export the model
module.exports = mongoose.model('PostModel', postSchema);
