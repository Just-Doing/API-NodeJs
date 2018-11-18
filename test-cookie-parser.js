
var express = require('express');
var cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.use(function (req, res, next) {
    console.log(req.cookies.nick); // 第二次访问，输出chyingp
    next();
});


  app.use(function (req, res, next) {  
    res.cookie('nick', 'chyingp');
    res.end('ok');
  });



app.listen(3000);
console.log('app alred listen port on 3000');