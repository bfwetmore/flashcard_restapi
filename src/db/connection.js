import {Sequelize} from 'sequelize';
import fs from "fs";
import 'dotenv/config';

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
import Flashcard from './models/flashcard.js';
import Users from './models/user.js';

db.models.Flashcard = (Flashcard)(sequelize);
db.models.Users = (Users)(sequelize);

export default db;
