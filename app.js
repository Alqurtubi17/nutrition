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

app.use(function(req, res) {
    res.status(400);
    res.render('404')
})

app.listen(port, () => {
    console.log(`App listening  on port ${port}`);
})