const express = require('express')
const bodyParser = require('body-parser');

const courses = [];

const app = express();

app.use(bodyParser.json());

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name 
    }
    courses.push(course);
    res.send(course);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.listen(3000, () => {
    console.log('Server started on 3000');
});