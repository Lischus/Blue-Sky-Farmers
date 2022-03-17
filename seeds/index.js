const sequelize = require('../config/controller.js');
const { User, PossibleMatch } = require('../models');

const userSeedData = require('./userData.json');
const possibleMatchData = require('./possibleMatch.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });

    await PossibleMatch.bulkCreate(possibleMatchData);

    process.exit(0);
};

seedDatabase();