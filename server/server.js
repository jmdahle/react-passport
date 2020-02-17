const express = require('express');
const svr = express();
const dbConnection = require('./database');
const user = require('./routes/user');


//  middleware
// body parsers:
svr.use(express.urlencoded({ extended: true }));  // allows request parsing (e.g., request.body._ )
svr.use(express.json());  // allows parsing of JSON requests

// routing
svr.use('/user', user)

// start server
const PORT = process.env.PORT || 3001;
svr.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})