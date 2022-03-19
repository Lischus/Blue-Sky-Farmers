const User = require('./User');
const PossibleMatch = require('./PossibleMatch');
const Result = require('./Result');
const Group = require('./Group');

User.hasOne(Result, {
  foreignKey: 'user_id',
});

User.belongsTo(Group, {
  foreignKey: 'group_id',
});

module.exports = { User, PossibleMatch, Result, Group };
