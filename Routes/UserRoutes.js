// const express = require('express')
import  express  from 'express';
const router = express.Router();
import userController from '../Controller/UserController.js'


router.post('/signup' ,userController.userSignup  )
router.post('/sigin', userController.usersignin)



export default router