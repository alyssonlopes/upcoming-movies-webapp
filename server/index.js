const express = require('express');
const path = require('path');
const app = express();
const { PORT } = require('./config')

const routes = require('./src/routes')

const port = PORT || 8000

app.use(express.static(path.join(__dirname, 'build')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use('/api', routes)

app.listen(port, () => console.log(`Listening on port ${port}`));