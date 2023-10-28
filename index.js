const express = require('express'),
morgan = require('morgan');
const app = express();
const fs = require('fs')
const path = require('path')

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
app.use(morgan("combined", { stream: accessLogStream }));
app.use(morgan('common'));

let favFilms = [
  {
    title: 'Film 1',
    author: 'Auteur1'
  },
  {
    title: 'Film 2',
    author: 'Auteur2'
  },
  {
    title: 'Film 3',
    author: 'Auteur3'
  },
  {
    title: 'Film 4',
    author: 'Auteur4'
  },
  {
    title: 'Film 5',
    author: 'Auteur5'
  },
  {
    title: 'Film 6',
    author: 'Auteur6'
  },
  {
    title: 'Film 7',
    author: 'Auteur7'
  },
  {
    title: 'Film 8',
    author: 'Auteur8'
  },
  {
    title: 'Film 9',
    author: 'Auteur9'
  },
  {
    title: 'Film 10',
    author: 'Auteur10'
  },
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie database!');
});

app.get('/movies', (req, res) => {                  
  res.json(favFilms);
});

// express.static
app.use(express.static('public'));

//error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

