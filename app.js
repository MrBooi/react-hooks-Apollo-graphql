const express = require('express');
const apolloServer = require('./schema/schema.js');
const cors = require('cors');

const path = require('path');


const app = express();

// allow corss-orgin
app.use(cors());

const server = apolloServer;

server.applyMiddleware({ app });

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send(path.resolve(__dirname, 'public', 'index.html'));
})

// PORT
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

