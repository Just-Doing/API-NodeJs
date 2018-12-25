
import MenuService from "../../model/system/menu";
import  {menu as menuValidator}  from "../../model/validateModel";

class MenuController {
    async getMenu( req, res ){
        const name = req.query.w;
        const menus = await MenuService.getMenu( name );
        res.send( {menus} );
    }

    async addMenu( req, res, next ){
        const bodyPara = req.body;
        const msg = menuValidator.validate( bodyPara ); // 校验数据
        if( msg.length ){
            const msgArray = msg.map( o => ( {
                path: o.path,
                message: o.message,
            } ) );
            res.send( {
                status: 0,
                msg: msgArray,
            } );
        } else {
            await MenuService.addMenu( bodyPara )
                .then( ( error, doc ) => {
                    if ( error ) {
                        next( error );
                    } else {
                        res.send( doc );
                    }
                } );
        }
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
            throw new Error( "parameter error" );
        }
    }
}

export default new MenuController();