
import MenuService from "../../model/system/menu";

class MenuController {
    async getMenu( req, res ){
        const bodyPara = req.body;
        let menus = [];
        if( bodyPara.name ){
            menus = await MenuService.getMenu();
        }else{
            menus=[];
        }
        res.send( {menus} );
    }

    async addMenu( req, res ){
        const bodyPara = req.body;
        res.send( {a: [bodyPara]} );
    }

    async deleteMenu( req, res ){
        const bodyPara = req.body;
        res.send( {a: [bodyPara]} );
    }
}

export default new MenuController();