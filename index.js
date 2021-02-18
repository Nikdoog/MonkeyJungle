const express = require('express');
const ejs = require ('ejs');
const path = require('path');

const ClientPath = path.join(__dirname, '../Client')
const staticPath = path.join(ClientPath,'/static');
const viewsPath = path.join(ClientPath, '/views')

const app = express(); 

app.set('view engine', 'ejs');
app.set('views',viewsPath);

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/famous', function(req, res) {
	res.render('famous');
}); 

app.use(express.static(staticPath))

app.listen(2000);