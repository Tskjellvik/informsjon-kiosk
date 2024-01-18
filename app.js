const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index'); // Renders index.ejs
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/login', function(req, res) {
  res.render('login.ejs');
});

app.get('/admin', function(req, res) {
  res.render('admin.ejs'); 
});
