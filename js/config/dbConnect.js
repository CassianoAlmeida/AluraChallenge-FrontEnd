import mongoose from "mongoose";

mongoose.connect('mongodb+srv://cassiano:123@alura-geek.9cdn5.mongodb.net/alura-geek');

let db = mongoose.connection;

export default db;