const express = require('express');
const sequelize = require('./config/controller');
require('dotenv').config();
const path = require('path');
const socket = require('socket.io');

const session = require('express-session');
const exphbs = require('express-handlebars');
// Import express-session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;
// const SECRET_PASS = process.env.SECRET_PASS;

// Set up sessions
const sess = {
  secret: process.env.SECRET_PASS,
  cookies: {},
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
sequelize.sync({ force: false });
// .then(() => {
//   app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
// });

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const io = socket(server);

const activeUsers = new Set();

io.on('connection', function (socket) {
  console.log('Made socket connection');

  socket.on('new user', function (data) {
    socket.userId = data;
    activeUsers.add(data);
    io.emit('new user', [...activeUsers]);
  });

  socket.on('disconnect', () => {
    activeUsers.delete(socket.userId);
    io.emit('user disconnected', socket.userId);
  });

  socket.on('chat message', function (data) {
    io.emit('chat message', data);
  });

  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data);
  });
});
