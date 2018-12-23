import Express from "express";
import UserController from "../controller/system/userController";

require( "express-async-errors" );


const router = Express.Router();

router.get( "/users/get?:w", UserController.getData );
router.post( "/users/put",  UserController.addData );
router.get( "/test",  async ( req, res ) => {
    JSON.parse( "{{" ); // 抛出异常
    res.send( {a: "1"} );
}  );

export default router;