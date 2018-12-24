
import Express from "express";
import connectMongo from "connect-mongo";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import chalk from "chalk";
import { configure, getLogger } from "log4js";
import router from "./router";

require( "./db/mongodb" );
const config =  require( "config-lite" )( __dirname );
const log4jsConfig = require( "./config/log4js.js" );

configure( log4jsConfig );
const logger = getLogger( "global" );

const app = new Express();
app.all( "*", ( req, res, next ) => {
    res.header( "Access-Control-Allow-Origin", req.headers.origin || req.headers.referer || "*" );
    res.header( "Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With" );
    res.header( "Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS" );
  	res.header( "Access-Control-Allow-Credentials", true ); // 可以带cookies
    res.header( "X-Powered-By", "Express" );
    if ( req.method === "OPTIONS" ){
	  	res.sendStatus( 200 );
    } else {
	    next();
    }
} );
const MongoStore = connectMongo( session );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.use( session( {
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie,
    store: new MongoStore( {
		  url: config.systemDb,
		  ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    } ),
} ) );


// connect-history-api-fallback 将前端页面 转向另外目录 和 express.static('./public') 联合使用
// app.use(history());
// app.use(express.static('./public'));
router( app );

app.use( ( err, req, res, next ) => { // 全局异常拦截器
    if( !err ) {
        next();
    } else{
        res.status( err.status || 500 );
        logger.error( `
=========================================================================================
${err.stack}
=========================================================================================` );
        res.send( {status: 0, msg: "发生错误 请联系管理员！"} );
    }
} );

// 登录 拦截器 权限拦截器
// app.use( ( req, res, next ) => {
//     const url = req.originalUrl;
//     if ( url !== "/login" && !req.session.user ) {
//         res.redirect( "/login" );
//     }
//     next();
// } );

app.listen( config.port, () => {
    console.log( chalk.green( "App already running on port 3000" ) );
} );
