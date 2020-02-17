const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// database: MongoDB
const uri = process.env.MONGODB_URI || 'mongodb://localhost/passport_test_db';

mongoose.connect(uri, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(
        () => {
            console.log('mongoDB database connection established successfully');
        },
        err => {
            console.log('error connecting to mongoDB');
            console.log(err);
        }
    );

module.exports = mongoose.connection;
