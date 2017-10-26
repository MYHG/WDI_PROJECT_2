module.exports = {
  port: process.env.PORT || 3000,
  databaseURL: process.env.MONGODB_URI || 'mongodb://localhost/all-the-birds',
  sessionSecret: process.env.SESSION_SECRET || 'YghT5s617/1{%sDt'
};
