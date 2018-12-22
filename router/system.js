import express from "express";
import UserController from "../controller/system/userController";

const router = express.Router();


router.get( "/users/get?:w", UserController.getData );
router.post( "/users/put", UserController.addData );
router.post( "/test", ( req, res ) => {

    res.send( {test: req} );
} );
router.route( "/ttt" ).post( ( req ) => {
    console.log( req.body );// 这里能够拿到参数

  } );

export default router;