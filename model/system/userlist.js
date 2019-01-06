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
        }
    } );
};

// 获取 一个用户信息
userScheam.statics.addUserInfo = function( userInfo ) {
    return new Promise( async ( resolve, reject ) => {
        await this.create( userInfo, ( err, candies ) => {
            if( err ){
                reject( err );
            } else {
                resolve( candies );
            }
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

userScheam.statics.updateUser = function ( userInfo ){
    return new Promise( async ( resolve ) => {
        await this.updateOne( {userCode: userInfo.userCode}, userInfo, {runValidators: true, new: true}, ( err, doc ) => {
            resolve( err, doc );
        }  );
    } );
};

const User = Mongose.model( "System_User", userScheam );

// 初始化 user 数据
User.findOne( {userCode: "admin"}, ( err, data ) => {
    if( err ){
        console.log( err );
    } else
    if ( !data ) {
        const initUser = {
            userCode: "admin",
            userName: "admin",
            accountName: "admin",
            pwd: "admin",
            gander: 1,
            age: 22,
            address: "北京",
            QQ: "12345",
            email: "admin@admin.com",
            phone: "13888888888",
            operateTime: new Date(),
            enable: true,
        };
        User.create( initUser );
    }
} );

export default User;