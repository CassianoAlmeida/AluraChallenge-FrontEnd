import mongoose from "mongoose";

mongoose.connect('mongodb://kasso-app01:Passaro12@mongodb.mongo71-farm10.kinghost.net:27017/kasso-app01?authSource=kasso-app01&readPreference=primary&appname=MongoDB%20Compass&ssl=false');

let db = mongoose.connection;

export default db;