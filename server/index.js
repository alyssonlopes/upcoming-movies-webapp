const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const { PORT } = require('./config')

const routes = require('./src/routes')

const port = PORT || 5000

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));