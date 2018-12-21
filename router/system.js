import express from 'express';
import UserController from '../controller/system/userController';

const router = express.Router();


router.get('/users/get?:w', UserController.getData);
router.post('/users/put', UserController.addData);

export default router;