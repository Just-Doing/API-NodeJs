const assert = require( "assert" );
const http = require( "http" );
const axios = require( "axios" );
const chai = require( "chai" );
require( "should" );

const {expect} = chai;

it( "api:menu/get ==> should return menus", ( done ) => {
    http.get( "http://localhost:3000/system/menu/get", ( res ) => {
        res.setEncoding( "utf8" );
        res.on( "data", ( text ) => {
            assert.equal( res.statusCode, 200 );
            const result = JSON.parse( text );
            result.should.have.property( "total" );
            result.should.have.property( "menus" );
            done();
        } );
    } );
} );

it( "api:menu/put ==> should return a object", ( ) => {
    axios.post( "http://localhost:3000/system/menu/put", {} ).then( ( res ) => {
        assert.equal( res.statusCode, 200 );
        expect( res ).to.be.an( "object" );
    } );
} );


it( "api:menu/setpower ==> should return a object", ( ) => {
    axios.post( "http://localhost:3000/system/menu/setMenu", {} ).then( ( res ) => {
        assert.equal( res.statusCode, 200 );
        expect( res ).to.be.an( "object" );
    } );
} );

