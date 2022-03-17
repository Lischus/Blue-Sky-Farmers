const express = require('express');
const sequelize = require('./config/controller');
require('dotenv').config();
const path = require('path');

const session = require('express-session');
const exphbs = require('express-handlebars');
// Import express-session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;
const SECRET_PASS = process.env.SECRET_PASS;

// Set up sessions
const sess = {
  secret: SECRET_PASS,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// import sequelize connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// mysql.createConnection(
//   {
//     host: "localhost",
//     // MySQL username,
//     user: process.env.DB_USER,
//     // MySQL password
//     password: process.env.DB_PW,
//     database: "ecommerce_db",
//   },
//   console.log(`Connected to the ecommerce_db database.`)
// );

// sync sequelize models to the database, then turn on the server
