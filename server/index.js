const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/dev');

const session = require('express-session');
const passport = require('passport');

const meetupsRoutes = require('./routes/meetups'),
    usersRoutes = require('./routes/users'),
    threadsRoutes = require('./routes/threads'),
    postsRoutes = require('./routes/posts'),
    categoriesRoutes = require('./routes/categories');

const mongoDbStore = require('connect-mongodb-session')(session);


const store = new mongoDbStore({
    uri: config.DB_URI,
    collection: 'meetupSessions'
});

store.on('err', (err) => console.log(err));

require("./models/meetups");
require("./models/users");
require("./models/threads");
require("./models/posts");
require("./models/categories");

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: config.SESSION_SECRET,
    cookie: {maxAge: 360000},
    resave: false,
    saveUninitialized: false,
    store
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/meetups', meetupsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/threads', threadsRoutes);
app.use('/api/v1/categories', categoriesRoutes);

module.exports = app;
