import { deleteUser, findAllUsers, findUser, newUser, updateUser } from './../controllers/user.Controller';
import express from 'express';

let router = express.Router();

router.get('/users', findAllUsers);
router.get('/user/:username', findUser);
router.post('/user', newUser);
router.put('/user', updateUser);
router.delete('/user/:username', deleteUser);

export default router;
