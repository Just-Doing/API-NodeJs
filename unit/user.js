const assert = require( "assert" );
const http = require( "http" );
const axios = require( "axios" );
const chai = require( "chai" );
require( "should" );

const {expect} = chai;

it( "api:users/get ==> should return OK", ( done ) => {
    http.get( "http://localhost:3000/system/users/get", ( res ) => {
        res.setEncoding( "utf8" );
        res.on( "data", ( text ) => {
            assert.equal( res.statusCode, 200 );
            const result = JSON.parse( text );
            result.should.have.property( "total" );
            result.should.have.property( "users" );
            done();
        } );
    } );
} );

it( "api:users/put ==> should return a object", ( ) => {
    axios.post( "http://localhost:3000/system/users/put", {} ).then( ( res ) => {
        assert.equal( res.statusCode, 200 );
        expect( res ).to.be.an( "object" );
    } );
} );


it( "api:users/setpower ==> should return a object", ( ) => {
    axios.post( "http://localhost:3000/system/users/setpower", {} ).then( ( res ) => {
        assert.equal( res.statusCode, 200 );
        expect( res ).to.be.an( "object" );
    } );
} );

