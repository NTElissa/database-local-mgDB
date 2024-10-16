// database.js

import mongoose from 'mongoose';

const uri = "mongodb://localhost:27017/testMong";  // MongoDB connection string

async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); 
    }
}

export default connectDB; 
