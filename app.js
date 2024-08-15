import express from "express";
import cors from "cors";
import { addUser, deleteUser, getUsers, updateUser } from './controller.js'

const app = express();
// Middleware 
app.use(cors());

app.use(
    express.urlencoded({
        extended: true, // add data for encoding
    })
);

// data receive or send type is json 
app.use(express.json());

// Get API's
app.get('/users', (req, res) => {
    getUsers((req, res, next) => res.send(users));
});

app.post('/createuser', (req, res) => {
    addUser(req.body, (callback) => {
        res.send();
    });
});

app.post('/updateuser', (req, res) => {
    updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/deleteuser', (req, res) => {
    deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

export default app;