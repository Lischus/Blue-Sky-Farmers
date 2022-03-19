const User = require('./User');
const Result = require('./Result');
const Group = require('./Group');

User.hasOne(Result, {
  foreignKey: 'user_id',
});

User.belongsTo(Group, {
  foreignKey: 'group_id',
});

module.exports = { User, Result, Group };
