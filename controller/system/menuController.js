
import MenuService from "../../model/system/menu";

class MenuController {
    async getMenu( req, res ){
        const name = req.query.w;
        const menus = await MenuService.getMenu( name );
        res.send( {menus} );
    }

    async addMenu( req, res, next ){
        const bodyPara = req.body;
        await MenuService.addMenu( bodyPara )
            .then( ( error, doc ) => {
                if ( error ) {
                    next( error );
                } else {
                    res.send( doc );
                }
            }, ( validateErro ) => {
                if( validateErro ){
                    res.send( {
                        status: 0,
                        msg: validateErro.message,
                    } );
                }
            } );
    }

    async deleteMenu( req, res ){
        const bodyPara = req.body;
        res.send( {a: [bodyPara]} );
    }
}

export default new MenuController();