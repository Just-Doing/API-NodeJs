
import User from "../../model/system/userlist";

class UserController {

    async getData( req, res ) {
        try{
            const name = req.query.w;
            const users = await User.getData( name );
            console.log( users );
			res.send( users ); ;;
        }
        catch( e ){
            res.send( {
				name: "ERROR_DATA",
				message: "获取数据失败",
			} );
        }

    }

    async addData( req, res ) {
        try{
			res.send( {para: req.body} );
        }
        catch( e ){
            res.send( {
				name: "ERROR_DATA",
				message: "获取数据失败",
			} );
        }

    }
}
export default new UserController();