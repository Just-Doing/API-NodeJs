const assert = require( "assert" );
const http = require( "http" );
const axios = require( "axios" );
const chai = require( "chai" );
require( "should" );

const {expect} = chai;

it( "api:role/get ==> should return roles", ( done ) => {
    http.get( "http://localhost:3000/system/role/get", ( res ) => {
        res.setEncoding( "utf8" );
        res.on( "data", ( text ) => {
            assert.equal( res.statusCode, 200 );
            const result = JSON.parse( text );
            result.should.have.property( "total" );
            result.should.have.property( "roles" );
            done();
        } );
    } );
} );

it( "api:role/put ==> should return a object", ( ) => {
    axios.post( "http://localhost:3000/system/role/put", {} ).then( ( res ) => {
        assert.equal( res.statusCode, 200 );
        expect( res ).to.be.an( "object" );
    } );
} );


it( "api:role/setMenu ==> should return a object", ( ) => {
    axios.post( "http://localhost:3000/system/role/setMenu", {} ).then( ( res ) => {
        assert.equal( res.statusCode, 200 );
        expect( res ).to.be.an( "object" );
    } );
} );

