import Express from "express";
import {UserController, LoginController, MenuController} from "../controller";

require( "express-async-errors" );


const router = Express.Router();

router.get( "/users/get?:w", UserController.getUser );
router.post( "/users/put",  UserController.addUser );
router.post( "/users/setpower", UserController.setPower );
router.get( "/menu/get?:w", MenuController.getMenu );
router.post( "/menu/put", MenuController.addMenu );
router.post( "/login",  LoginController.login );
router.post( "/logout",  LoginController.logout );

export default router;