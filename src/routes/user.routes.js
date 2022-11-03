import { Router } from 'express';
import { deletearUsuario, getUserById, getUsers, modificarUsuario } from '../controllers/user.controller';
import { verifyTokenAndAdmin, verifyTokenAndAuth } from '../middleware/verifyToken';

const userRouter = Router();


// Update
userRouter.put('/update/:id', verifyTokenAndAuth, modificarUsuario);
// Delete
userRouter.delete('/delete/:id', verifyTokenAndAuth, deletearUsuario);
// Get
userRouter.get('/', verifyTokenAndAdmin, getUsers);
userRouter.get('/find/:id', verifyTokenAndAdmin, getUserById);

export {userRouter}
