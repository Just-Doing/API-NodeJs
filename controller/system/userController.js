'use strict';
import User from '../../model/system/userlist';

class UserController {
    constructor(){
		this.getData = this.getData.bind(this);
	}
    async getData(req, res, next) {
        try{
            const name = req.query.w;
            const users = await User.getData(name);
            console.log(users);
			res.send(users);
        }
        catch(e){
            res.send({
				name: 'ERROR_DATA',
				message: '获取数据失败',
			});
        }

    }
}
export default new UserController()