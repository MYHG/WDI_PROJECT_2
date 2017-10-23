const mongoose = require('mongoose');

const yearbookSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  quote: {type: String, required: true}
});

yearbookSchema.methods.belongsTo = function profiileBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Profile', yearbookSchema);
