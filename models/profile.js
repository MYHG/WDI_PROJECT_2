const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  content: {type: String, required: true }
});
const yearbookSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  quote: [ quoteSchema ]
});

// yearbookSchema.methods.belongsTo = function profiileBelongsTo(user) {
//   if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
//   return user.id === this.createdBy.toString();
// };

module.exports = mongoose.model('Profile', yearbookSchema);
