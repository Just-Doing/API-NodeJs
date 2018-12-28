
import User from "../../model/system/userlist";

class UserController {
    async getUser( req, res ) {
        const { name, enable } = req.query;
        const users = await User.getData( {name, enable} );
        res.send( {
            total: users.length,
            users,
        } );
    }

    async addUser( req, res, next ) {
        const reqBody = req.body;
        User.addUserInfo( reqBody )
            .then( ( error, doc ) => {
                if ( error ) {
                    if( error.name === "ValidationError" ){
                        res.send( {
                            status: 0,
                            msg: error,
                        } );
                    }else {
                        next( error );
                    }
                } else {
                    res.send( doc );
                }
            } );
    }

    /*
    *    设置用户的 角色权限
    */
    async setRole( req, res, next ) {
        const reqBody = req.body;
        User.setRole( reqBody )
            .then( ( error, doc ) => {
                if ( error ) {
                    if( error.name === "ValidationError" ){
                        res.send( {
                            status: 0,
                            msg: error,
                        } );
                    }else {
                        next( error );
                    }
                } else {
                    res.send( doc );
                }
            } );
    }
}
export default new UserController();