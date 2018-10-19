const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const handlebars = require('mustache-express');
const exphbs = require('express-handlebars');


//Express Middleware
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Mongoose Middleware
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sheef-code:Bioshock12*@ds137263.mlab.com:37263/db_tcg', {
   useNewUrlParser: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
  res.render('index', {
  });
});




















// Listening for port
const port = 5000;
app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
