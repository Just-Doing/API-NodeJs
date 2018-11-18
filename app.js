
import express from 'express';
import db from './db/mongodb';
import connectMongo from 'connect-mongo';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import history from 'connect-history-api-fallback';
import chalk from 'chalk';
import router from './router';

const config =  require('config-lite')(__dirname);

const app = new express();
app.all("*", (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || req.headers.referer || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", 'Express');
	if (req.method == 'OPTIONS') {
	  	res.sendStatus(200);
	} else {
	    next();
	}
});

const MongoStore = connectMongo(session);
app.use(cookieParser());

app.use(session({
    name: config.session.name,
	secret: config.session.secret,
	resave: true,
	saveUninitialized: false,
	cookie: config.session.cookie,
	store: new MongoStore({
		  url: config.systemDb,
		  ttl: 14 * 24 * 60 * 60 // = 14 days. Default
	}),
}));

//connect-history-api-fallback 将前端页面 转向另外目录 和 express.static('./public') 联合使用
// app.use(history());
// app.use(express.static('./public'));
router(app);

app.listen(config.port, () => {
	console.log(chalk.green('App already running on port 3000'));
});
