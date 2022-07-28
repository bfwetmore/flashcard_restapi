const {Sequelize} = require('sequelize');
const fs = require("fs");
require('dotenv').config();

const user = process.env.DBUSER;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;

const sequelize = new Sequelize(database, user, password, {
    dialect: 'postgres',
    quoteIdentifiers: false,
    ssl: true,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
            ca: fs.readFileSync('./src/db/ssl/us-east-1-bundle.pem').toString()
        }
    },
    host: 'ec2-54-157-16-196.compute-1.amazonaws.com',
    port: 5432,
    logging: false
});

const db = {
    sequelize,
    Sequelize,
    models: {},
};

db.models.Flashcard = require('./models/flashcard')(sequelize);
db.models.Users = require('./models/user')(sequelize);

module.exports = db;
