import { Router } from 'express';
import userController from '../controller/user.controller.js';

const userRoutes = Router();

userRoutes.get('/users', userController.getUsers);
userRoutes.post('/user', userController.saveUsers);
userRoutes.put('/user/:id', userController.updateUser);
userRoutes.delete('/delete-user/:id', userController.deleteUser);

export default userRoutes;