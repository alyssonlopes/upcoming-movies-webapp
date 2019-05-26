const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', function (req, res) {
    return res.send({ hello: 'Hello, Welcome to Upcoming Movies Web App!'});
});

app.post('/api/test', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`
    );
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));