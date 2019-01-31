var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var talkSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  date: String,
  description: String,
});

// Export the model
module.exports = mongoose.model('TalkModel', talkSchema);
