const { User } = require('../models');

const UserData = [
  {
    user_name: 'Larry David',
    age: 45,
    sex: 'man',
    group_id: 1,
  },
  {
    user_name: 'Apple Alexa',
    age: 22,
    sex: 'woman',
    group_id: 25,
  },
  {
    user_name: 'Sandy Cheeks',
    age: 35,
    sex: 'woman',
    group_id: 17,
  },
  {
    user_name: 'Batman',
    age: 65,
    sex: 'man',
    group_id: 29,
  },
  {
    user_name: 'Zoe Kravitz',
    age: 28,
    sex: 'woman',
    group_id: 8,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
