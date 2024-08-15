import express from 'express';
import { addUser, deleteUser, getUsers, updateUser } from './controller.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/createuser', addUser);
router.post('/updateuser', updateUser);
router.post('/deleteuser', deleteUser);

export default router;