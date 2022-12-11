const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

const projects = require('./project.json');

/* Middleware */
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Portfolio server is running');
});

app.get('/projects', (req, res) => {
    res.send(projects);
});

app.listen(port, () => {
    console.log(`Portfolio server is running on port ${port}`);
})