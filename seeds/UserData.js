const { User } = require('../models');

const userdata = [
  {
    user_name: 'Larry David',
    age: 45,
    sex: 'man',
    group_id: 1,
    password: 'heyJoe',
  },
  {
    user_name: 'Apple Alexa',
    age: 22,
    sex: 'woman',
    group_id: 2,
    password: 'OverWatch',
  },
  {
    user_name: 'Sandy Cheeks',
    age: 35,
    sex: 'woman',
    group_id: 3,
    password: 'OnePiece',
  },
  {
    user_name: 'Batman',
    age: 65,
    sex: 'man',
    group_id: 1,
    password: 'goPhillies',
  },
  {
    user_name: 'Zoe Kravitz',
    age: 28,
    sex: 'woman',
    group_id: 1,
    password: 'Catwoman',
  },
];

const seedUser = () => User.create(userdata);

module.exports = seedUser;
