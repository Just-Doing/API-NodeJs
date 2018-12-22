import mongoose from "mongoose";

const userScheam = new mongoose.Schema( {
    data: {},
} );

// 获取 所有用户信息
userScheam.statics.getData = function( name ) {
    return new Promise( async ( resolve, reject ) => {
        try{
            const user = await this.findOne();
            if( !name ){
                resolve( user.data );
            } else {
                const users = user.data[name];
                resolve( users );
            }
        }
        catch( e ){
            reject( new Error( {
				name: "ERROR_DATA",
				message: "查找数据失败",
			} ) );
			console.error( e );
        }
    } );
};

// 获取 一个用户信息
userScheam.statics.getUserInfo = function( name ) {
    return new Promise( async ( resolve, reject ) => {
        try{
            const user = await this.findOne();
            if( !name ){
                resolve( user.data );
            } else {
                const users = user.data[name];
                resolve( users );
            }
        }
        catch( e ){
            reject( new Error( {
				name: "ERROR_DATA",
				message: "查找数据失败",
			} ) );
			console.error( e );
        }
    } );
};
const User = mongoose.model( "User", userScheam );
// 初始化 user 数据
User.findOne( ( err, data ) => {
	if ( !data ) {
		User.create( {data: {N:[{name: "nicol yang", age: 22}]}} );
	}
} );

export default User;