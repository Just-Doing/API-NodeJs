
import User from "../../model/system/userlist";
import  {user as userValidator}  from "../../model/validateModel";

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
        const msg = userValidator.validate( reqBody );
        if( msg.length ) {
            const msgArray = msg.map( o => ( {
                path: o.path,
                message: o.message,
            } ) );
            res.send( msgArray );
        } else {
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