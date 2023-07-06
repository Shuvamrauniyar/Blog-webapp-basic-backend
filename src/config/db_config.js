const mongoose = require('mongoose');

require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async() => {
    try {
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName:'blogdb'
          });
          console.log('Connected to MongoDb Atlas');
         // const db = mongoose.connection.useDb('blogdb');
    } catch (error) {
        console.log('failed to connect the database');
    }
}

module.exports =  dbConnect;
