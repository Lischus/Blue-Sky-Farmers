const Sequelize = require('sequelize');
require('dotenv').config();
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         host: 'localhost',
//         dialect: 'mysql',
//         dialectOptions: {
//           decimalNumbers: true,
//         },
//       }
//     );

// module.exports = sequelize;
