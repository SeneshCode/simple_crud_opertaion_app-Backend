import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import router from "./router.js";



const app = express();
const port = 1574;
const host = '127.0.0.1';

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://seneshDevelopment:S%405432551n@cluster0.tv6njlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('MongoDB not Connected , Something went worng! ', error);
    }
}

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to : ${server.address().port}`)
});

app.use('/api', router);