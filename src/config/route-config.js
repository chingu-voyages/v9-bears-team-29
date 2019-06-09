module.exports = {
    init(app){
        const userRoutes = require('../routes/user');

        app.use(userRoutes);

    }
};