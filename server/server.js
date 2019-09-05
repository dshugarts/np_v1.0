const express = require('express');
const app = express();
const bodyParser = require('body-parser');


let env = require('dotenv');
env.config();

// Route includes


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Filestack Key Call
const FILESTACK_KEY = process.env.FILESTACK_KEY;
app.get('/filestack-key', (req, res) => {
    res.send(FILESTACK_KEY);
})

// Passport Session Configuration


// Start up passport sessions


/* Routes */


// Serve static files
app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});