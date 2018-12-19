var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var projectSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
});

// Export the model
module.exports = mongoose.model('ProjectModel', projectSchema);
