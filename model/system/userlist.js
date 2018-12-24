import Mongose from "mongoose";
import  {user as userValidator}  from "../validateModel";

const userScheam = new Mongose.Schema( {
    userName: String,
    age: Number,
    operateTime: Date,
} );

// 获取 所有用户信息
userScheam.statics.getData = function( name ) {
    return new Promise( async ( resolve, reject ) => {
        try{
            if( name ){
                const user = await this.find( {userName: name} );
                resolve( user );
            } else {
                const user = await this.find();
                resolve( user );
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
userScheam.statics.addUserInfo = function( user ) {
    return new Promise( async ( resolve, reject ) => {
        try{
            const msg = userValidator.validate( user );
            if( msg.length ) {
                await this.create( user, ( err, candies ) => {
                    resolve( err, candies );
                } );
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
const User = Mongose.model( "System_User", userScheam );
// 初始化 user 数据
User.find( {userName: "admin"}, ( err, data ) => {
    if ( !data ) {
        User.create( {userName: "admin", age: 22} );
    }
} );

export default User;