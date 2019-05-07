const path = require('path');
const express = require('express');

const app = express();
const publicDirectory = path.join(__dirname, '../public');

app.get('', (req, res) => {
   res.render('index', {
       title: 'Secret Editor',
       Environment: 'Kubernetes'
   });
});

app.get('/update', (req, res) => {
    res.render('update');
});

app.get('/delete', (req, res) => {
    res.render('delete');
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));


app.listen(3000, () => {
    console.log('Server is up on 3000.');
});