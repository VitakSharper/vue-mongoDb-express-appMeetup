const mongoose = require('mongoose');
const config = require('./config/dev');

const app = require('./index');

(async () => {
    try {
        await mongoose.connect(config.DB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('Successful connected to DB (❁´◡`❁)');
    } catch (e) {
        console.log('Error connect to DB ༼ つ ◕_◕ ༽つ', e);
    }
})();

const PORT = process.env.PORT || 3001;

console.log('Port: ', PORT);
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
