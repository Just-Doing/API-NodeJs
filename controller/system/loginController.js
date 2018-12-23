


class LoginController {
    async login( req, res ) {
        req.session.user = {
            name: "admin",
            id: "admin",
            role: "admin",
        };
        res.redirect( req.body.url ); // 跳转页面
    }

    async logout( req, res ) {
        if( req.session.user ) {
            req.session = null;
        }
        res.redirect( "/login" ); // 跳转到登录页面
    }

    async checkUser( req, res ) {
        if( req.session.user ) {
            req.session = null;
        }
        res.send( {status: 1} );
    }
}

export default new LoginController();