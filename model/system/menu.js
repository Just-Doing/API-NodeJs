import Mongose from "mongoose";
import { menu } from "../schema";

const menuSchema = Mongose.Schema( menu );

menuSchema.statics.getMenu = function( name ) {
    return new Promise( async ( resolve, reject ) => {
        try {
            let menus = [];
            if( name ){
                menus = this.find( {menuName: name} );
            } else {
                menus = this.find();
            }
            resolve( menus );
        } catch ( error ) {
            reject( new Error( {
                name: "ERROR_DATA",
                message: "查找数据失败",
            } ) );
            console.error( error );
        }
    } );
};

menuSchema.statics.addMenu = function( menuInfo ){
    return new Promise( async ( resolve ) => {
        await this.create( menuInfo, ( err, candies ) => {
            resolve( err, candies );
        } );
    } );
};

menuSchema.statics.delete = function( condition ){
    return new Promise( async ( resolve, reject ) => {
        const dbData = this.findOne( {menuCode: condition.menuCode} );
        if( dbData ){
            await this.findOneAndDelete( {menuCode: condition.menuCode}, ( err, doc ) => {
                if( err ){
                    reject( new Error( "delete error !" ) );
                } else {
                    resolve( doc );
                }
            } );
        } else {
            reject( new Error( "the menu non-existent !" ) );
        }
    } );
};

const menuModel = Mongose.model( "System_Menu", menuSchema );

export default menuModel;