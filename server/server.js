const express = require('express');
const svr = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
svr.use(express.urlencoded({ extended: true }));  // allows request parsing (e.g., request.body._ )
svr.use(express.json());  // allows parsing of JSON requests


// routing
svr.post('/', (request, response, next) => {
    console.log('server post username: ');
    console.log(request.body.username);
    response.end;
});


// start server
svr.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})