const mongoose = require('mongoose');

const yearbookSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: { type: String, trim: true, required: true },
  content: {type: String, required: true},
  image: {type: String, required: true},
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

yearbookSchema.methods.belongsTo = function BelongsTo(user) {
  console.log(user._id, this.createdBy);
  return user._id === this.createdBy;
};

module.exports = mongoose.model('Yearbook', yearbookSchema);
