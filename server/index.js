const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

const session = require('express-session');
const passport = require('passport');
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

const meetupsRoutes = require('./routes/meetups'),
    usersRoutes = require('./routes/users'),
    threadsRoutes = require('./routes/threads'),
    postsRoutes = require('./routes/posts'),
    categoriesRoutes = require('./routes/categories');

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

const PORT = process.env.PORT || 3001;


(async () => {
    try {
        if (await mongoose.connect(config.DB_URI, {
            useNewUrlParser: true, useFindAndModify: false
        })) {
            console.log('DB Connected');
            app.listen(PORT, () => {
                console.log(`App is running on port: ${PORT}`);
            });
        }
    } catch (e) {
        console.log(e)
    }
})();



