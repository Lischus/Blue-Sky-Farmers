const User = require('./User');
const PossibleMatch = require('./PossibleMatch');
const Result = require('./Result');

User.hasOne(Result, {
  foreignKey: 'user_id',
});

module.exports = { User, PossibleMatch, Result };
