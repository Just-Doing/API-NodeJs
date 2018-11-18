import mongoose from 'mongoose';
import {filter} from 'loadsh';

const userScheam = new mongoose.Schema({
    data: {},
});

// userScheam.statics.getDataByFirstword = name => {
//     return new Promise(async (resolve, reject) => {
//         const firstWord = name.substr(0,1).toUpperCase();
//         try{
//             const users = await this.findOne();
//             Object.entrise(users.data).forEach(item => {
//                 if(item[0] == firstWord){
//                     item[1].forEach(user => {
// 						if (user.pinyin == name) {
// 							resolve(user)
// 						}
// 					})
//                 }
//             })
//         }
//         catch(e){
//             reject({
// 				name: 'ERROR_DATA',
// 				message: '查找数据失败',
// 			});
// 			console.error(err);
//         }

//     })
// }

//获取 所有用户信息
userScheam.statics.getData = function(name) {
    return new Promise(async (resolve, reject) => {
        try{
            const user = await this.findOne();
            if(!name){
                resolve(user.data);
            } else {
                const users = user.data[name];
                resolve(users);
            }
        }
        catch(e){
            reject({
				name: 'ERROR_DATA',
				message: '查找数据失败',
			});
			console.error(err);
        }
    });
}

const User = mongoose.model('User', userScheam);
//初始化 user 数据
// User.findOne((err, data) => {
// 	if (!data) {
// 		User.create({data: {N:[{name: 'nicol yang', age: 22}]}});
// 	}
// });

export default User;