const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

const projects = require('./project.json');
const blogs = require('./blog.json');

/* Middleware */
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Portfolio server is running');
});

/* Projects Getting */
app.get('/projects', (req, res) => {
    res.send(projects);
});

/* Projects Getting With ID */
app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    const project = projects.find( project => project._id === id);
    res.send(project);
});

/* Blogs Getting */
app.get('/blogs', (req, res) => {
    res.send(blogs);
});

app.listen(port, () => {
    console.log(`Portfolio server is running on port ${port}`);
})