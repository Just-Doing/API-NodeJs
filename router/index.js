
import system from "./system";

require( "express-async-errors" );

export default app => {
    app.get( "/test",  async ( req, res ) => {
        JSON.parse( "{{" ); // 抛出异常
        res.send( {a: "1"} );
    }  );

    app.use( "/system", system );

};