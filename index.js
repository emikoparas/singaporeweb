import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';//import routes for user-related endpoints

dotenv.config();//initialize environment variables

const app = express();
const port = 4000;

app.use(cors());//allow cross-origin requests
app.use(express.json());//middleware to handle JSON data in requests

app.use('/api/user', userRoutes);//define the route for user-related API requests

const dbURI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

connectDB();//establish a connection to the MongoDB database

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
