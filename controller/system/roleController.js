import Role from "../../model/system/role";

class RoleController{
    async getRole( req, res ){
        const {name, enable} = req.query;
        const roles = Role.getRole( {name, enable} );
        res.send( {
            total: roles.length,
            roles,
        } );
    }

    async addRole( req, res, next ){
        const roleInfo = req.body;
        Role.addRole( roleInfo ).then( ( error, doc )=>{
            if( error ) {
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

export default new RoleController();