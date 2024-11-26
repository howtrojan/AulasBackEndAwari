import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose;

db.url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;


export default db;
