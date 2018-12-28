import Mongose from "mongoose";
import { role } from "../schema";

const roleSchema = new Mongose.Schema( role );

roleSchema.statics.addRole = function( roleInfo ){
    return new Promise( async ( resolve ) => {
        await this.creact( roleInfo, ( err, doc ) => {
            resolve( err, doc );
        } );
    } );
};


roleSchema.statics.deleteRole = function( condition ){
    return new Promise( async ( resolve ) => {
        const dbData = this.findOne( {roleCode: condition.roleCode} );
        if( dbData ){
            await this.findOneAndDelete( role, ( err, doc ) => {
                resolve( err, doc );
            } );
        }
    } );
};

roleSchema.statics.getRole = function( condition ){
    return new Promise( async ( resolve ) => {
        const list = this.find( condition );
        resolve( list );
    } );
};



const Role = Mongose.model( "role", roleSchema );

export default Role;