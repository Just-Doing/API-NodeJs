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
        await this.findOneAndDelete( {roleCode: condition.roleCode}, ( err, doc ) => {
            resolve( err, doc );
        } );
    } );
};

roleSchema.statics.getRole = function( condition ){
    return new Promise( async ( resolve ) => {
        const list = this.find( condition );
        resolve( list );
    } );
};

roleSchema.statics.updateRole = function( roleInfo ) {
    return new Promise( async ( resolve ) => {
        await this.updateOne( {roleCode: roleInfo.roleCode}, roleInfo, ( err, doc ) => {
            resolve( err, doc );
        } );
    } );
};

const Role = Mongose.model( "role", roleSchema );

export default Role;