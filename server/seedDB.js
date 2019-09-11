const mongoose = require('mongoose');
const Meetup = require('./models/meetups');
const User = require('./models/users');
const Post = require('./models/posts');
const Thread = require('./models/threads');
const Category = require('./models/categories');

const data = require('./data.js');
const config = require('./config/dev');

class DB {
    constructor() {
        this.meetups = data.meetups;
        this.users = data.users;
        this.threads = data.threads;
        this.posts = data.posts;
        this.categories = data.categories;
        this.models = [Meetup, User, Post, Thread, Category];
    }

    async cleanDb() {
        for (let model of this.models) {
            await model.deleteMany({}, () => {
            });
            console.log(`Data for model ${model.collection.collectionName} Deleted!`)
        }
    }

    async pushDataToDb() {
        await this.categories.map(async (category) => {
            const newCategory = new Category(category);
            await newCategory.save(() => {
            });
        });

        await this.users.map(async user => {
            await (new User(user)).save(() => {
            })
        });

        await this.meetups.map(async meetup => {
            await (new Meetup(meetup)).save(() => {
            })
        });

        await this.threads.map(async thread => {
            await (new Thread(thread)).save(() => {
            })
        });

        await this.posts.map(async post => {
            await (new Post(post)).save(() => {
            })
        });

        console.log('Database Populated!');
    }

    async seedDb() {
        await this.cleanDb();
        await this.pushDataToDb();
    }
}

async function startSeed() {
    try {
        if (await mongoose.connect(config.DB_URI, {useNewUrlParser: true})) {
            const db = new DB();
            await db.seedDb();
            console.log('You can close connection now!')
        }
    } catch (e) {
        console.log(e);
    }
}

startSeed();

// mongoose.connect(config.DB_URI, {useNewUrlParser: true})
//     .then(async () => {
//         const db = new DB();
//         await db.seedDb();
//         console.log('You can close connection now!')
//     })
//     .catch(err => console.log(err));
