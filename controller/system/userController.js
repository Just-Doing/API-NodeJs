
import User from "../../model/system/userlist";

class UserController {
    async getUser( req, res ) {
        const name = req.query.w;
        const users = await User.getData( name );
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
                    next( error );
                    console.error( error );
                } else {
                    res.send( doc );
                    console.error( doc );
                }
            } );
    }

    async setPower( req, res, next ) {
        const reqBody = req.body;
        User.addUserPower( reqBody, ( error, doc ) => {
            if ( error ) {
                next( error );
                console.error( error );
            } else {
                res.send( doc );
                console.error( doc );
            }
        } );
    }
}
export default new UserController();