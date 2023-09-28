'use strict';

require('dotenv').config();
const { db } = require('./src/models');
// const { users } = require('./src/auth/models'); // import users model
const server = require('./src/server.js');
const PORT = process.env.PORT || 3001

db.sync().then(() => { // sync the database
  server.start(PORT);
});