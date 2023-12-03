const {Router} = require('express');

const {signInController} = require('../controller/user/signIn');
const {getByEmailController} = require('../controller/user/getByEmail');
const {createUserController} = require('../controller/user/signUp');
const {getByIdController} = require('../controller/user/getByid');
const {getAllController} = require('../controller/user/getAll');
const {validationToken} = require('../middleware/validationToken');

const userRouter = Router()
 
userRouter.post('/signup', createUserController);
userRouter.post('/signin', signInController);
userRouter.get('/getbyemail',validationToken, getByEmailController);
userRouter.get('/:id',validationToken, getByIdController);
userRouter.get('/',validationToken, getAllController);

module.exports = { userRouter }