import Mongose, { ValidationError } from "mongoose";
import {user} from "../schema";

const userScheam = new Mongose.Schema( user );

// 获取 所有用户信息
userScheam.statics.getData = function( condition ) {
    const { name, enable } = condition;
    return new Promise( async ( resolve, reject ) => {
        try{
            if( name ){
                const users = await this.find( { userName: name, enable } );
                resolve( users );
            } else {
                const users = await this.find();
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
userScheam.statics.addUserInfo = function( userInfo ) {
    return new Promise( async ( resolve ) => {
        await this.create( userInfo, ( err, candies ) => {
            resolve( err, candies );
        } );
    } );
};


// 设置一个用户的 角色权限
userScheam.statics.setRole = function( userRole ) {
    return new Promise( async ( resolve ) => {
        if( userRole.userCode && userRole.roles ) {
            await this.create( userRole, ( err, candies ) => {
                resolve( err, candies );
            } );
        } else {
            resolve( new ValidationError( "need userCode and roles" ) );
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