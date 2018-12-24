import Mongose from "mongoose";
import  {menu as menuValidator}  from "../validateModel";

const menuSchema = Mongose.Schema( {
    menuCode: String,
    menuName: String,
    menuType: String,
    icon: String,
} );

menuSchema.statics.getMenu = function( name ) {
    return new Promise( async ( resolve, reject ) => {
        try {
            let menu = [];
            if( name ){
                menu = this.find( {menuName: name} );
            } else {
                menu = this.find();
            }
            resolve( menu );
        } catch ( error ) {
            reject( new Error( {
                name: "ERROR_DATA",
                message: "查找数据失败",
            } ) );
            console.error( error );
        }
    } );
};

menuSchema.statics.addMenu = function( menu ){
    return new Promise( async ( resolve, reject ) => {
        try {
            const msg = menuValidator.validate( menu );
            if( !msg.length ){
                await this.create( menu, ( err, candies ) => {
                    resolve( err, candies );
                } );
            } else{
                reject( new Error( msg ) );
            }
        } catch ( error ) {
            reject( new Error( {
                name: "ERROR_DATA",
                message: "查找数据失败",
            } ) );
        }
    } );
};

const menuModel = Mongose.model( "System_Menu", menuSchema );

export default menuModel;