const mongoose = require('mongoose');

const yearbookSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: { type: String, trim: true, require: true },
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

yearbookSchema.methods.belongsTo = function BelongsTo(user) {
  return user.id === this.createdBy;
};

module.exports = mongoose.model('Yearbook', yearbookSchema);
