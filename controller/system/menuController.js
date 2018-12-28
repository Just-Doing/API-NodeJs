
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
                    if ( error.name === "ValidationError" ) {
                        res.send( {
                            status: 0,
                            msg: error,
                        } );
                    } else {
                        next( error );
                    }
                } else {
                    res.send( doc );
                }
            } );
    }

    // 删除菜单
    async deleteMenu( req, res ){
        const bodyPara = req.body;
        if( bodyPara.menuCode ){
            await MenuController.delete( bodyPara )
                .then( ( doc ) => {
                    res.send( doc );
                }, ( err ) => {
                    if( err ){
                        res.send( {
                            status: 0,
                            msg: err,
                        } );
                    }
                } );
        } else {
            res.send( {
                status: 0,
                msg: "parameter error",
            } );
        }
    }
}

export default new MenuController();