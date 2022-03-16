const sequelize = require('../config/connection');
const { User, PossibleMatch } = require('../models');

const userSeedData = require('./userSeedData.json');
const possibleMatchData = require('./possibleMatchSeed.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
 
  await PossibleMatch.bulkCreate(possibleMatchData)

  process.exit(0);
};

seedDatabase();
