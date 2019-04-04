

module.exports = {
    port: parseInt( process.env.PORT, 10 ) || 3000,
    systemDb: "mongodb://127.0.0.1:27017/systemDb",
    businessDb: "mongodb://localhost:27017/businessDb",
    session: {
        name: "apiNodejs",
        secret: "apiNodejs",
        cookie: {
            httpOnly: true,
            secure:   false,
            maxAge:   365 * 24 * 60 * 60 * 1000,
        },
    },
};