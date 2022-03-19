const sequelize = require('../config/controller');
const { User } = require('../models');
const Group = require('../models/Group');

const userData = require('./userData.json');
const groupData = require('./GroupData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Group.bulkCreate(groupData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
