'use strict';

import express from 'express'
const router = express.Router();
import UserController from '../controller/system/userController';


router.get('/users/:w', UserController.getData);

export default router;