const User = require('./User');
const PossibleMatch = require('./PossibleMatch');
const Result = require('./Result');

User.hasOne(Result, {
  foreignKey: 'gallery_id',
});

Result.belongsToMany(User, {
  foreignKey: 'gallery_id',
});
module.exports = { User, PossibleMatch, Result };
