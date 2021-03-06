import Express from "express";
import {UserController, LoginController, MenuController} from "../controller";

require( "express-async-errors" );

const router = Express.Router();

router.get( "/users/get?:name?:enable", UserController.getUser );
router.post( "/users/put",  UserController.addUser );
router.post( "/users/setRole", UserController.setRole );
router.post( "/users/update", UserController.updateUser );
router.get( "/menu/get?:name?:enable", MenuController.getMenu );
router.post( "/menu/put", MenuController.addMenu );

router.post( "/login",  LoginController.login );
router.post( "/logout",  LoginController.logout );

export default router;