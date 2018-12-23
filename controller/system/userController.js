
import User from "../../model/system/userlist";

class UserController {
    async getData( req, res, next ) {
        try{
            const name = req.query.w;
            const users = await User.getData( name );
			res.send( {
                total: users.length,
                users,
            } );
        }
        catch( e ) {
            next( e );
            res.send( {
				name: "ERROR_DATA",
				message: "获取数据失败",
			} );
        }

    }

    async addData( req, res, next ) {
        JSON.parse( "{{" ); // 抛出异常
        const reqBody = req.body;
        User.addUserInfo( reqBody, ( error, doc ) => {
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