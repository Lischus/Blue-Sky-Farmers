const User = require('./User');
const PossibleMatch = require('./PossibleMatch');


 User.belongsToMany(User, {
    through: {
        model: PossibleMatch,
        unique: true
      },
      // Define an alias for when data is retrieved
      as: 'possible_match'
 })


// User.hasMany(PossibleMatch, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// PossibleMatch.belongToMany(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

module.exports = { User, Project };