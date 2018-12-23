import Express from "express";
import UserController from "../controller/system/userController";
import LoginController from "../controller/system/loginController";

require( "express-async-errors" );


const router = Express.Router();

router.get( "/users/get?:w", UserController.getUser );
router.post( "/users/put",  UserController.addUser );
router.post( "/users/setpower", UserController.setPower );
router.post( "/login",  LoginController.login );
router.post( "/logout",  LoginController.logout );

export default router;