const sequelize = require('../config/controller');
const seedUser = require('./UserData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  process.exit(0);
};

seedAll();
