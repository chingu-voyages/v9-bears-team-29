require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

module.exports = {
    init(app, express){

        const mongoose = require("mongoose", () => console.log("moongose connected"));

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        mongoose.connect(process.env.DB_URI, () => console.log("mongose connected"));

        app.use(cors());
        app.use(express.static(path.resolve(__dirname, 'client', 'public', 'index.html')));

        if(process.env.NODE_ENV === 'production') {
        app.use(express.static('client/build'));

        app.get('/', (req, res) => {
            res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'));
        })
        }

        app.use(logger('dev'));

    }
}