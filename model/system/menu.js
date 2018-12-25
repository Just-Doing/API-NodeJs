import Mongose from "mongoose";

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
    return new Promise( async ( resolve ) => {
        await this.create( menu, ( err, candies ) => {
            resolve( err, candies );
        } );
    } );
};

menuSchema.statics.delete = function( menu ){
    return new Promise( async ( resolve, reject ) => {
        const dbData = this.findOne( {menuCode: menu.menuCode} );
        if( dbData ){
            await this.findOneAndDelete( {menuCode: menu.menuCode}, ( err, doc ) => {
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