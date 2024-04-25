const express = require('express');
var cons = require('consolidate');
const path = require('path');
const app = express();
const port = 3000;

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/bmi', (req, res) => {
    res.render('bmi')
})

app.get('/materi-1', (req, res) => {
    res.render('materi-1')
})

app.get('/materi-2', (req, res) => {
    res.render('materi-2')
})

app.get('/materi-3', (req, res) => {
    res.render('materi-3')
})

app.get('/materi-4', (req, res) => {
    res.render('materi-4')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.use(function(req, res) {
    res.status(400);
    res.render('404')
})

app.listen(port, () => {
    console.log(`App listening  on port ${port}`);
})