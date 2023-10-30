const express = require('express'),
  morgan = require('morgan'),
  fs = require('fs'),
  path = require('path'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

  const app = express();

  // log to log.txt
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
app.use(morgan("combined", { stream: accessLogStream }));
app.use(morgan('common'));

// express.static
app.use(express.static('public'));

app.use(bodyParser.json());

let movies = [
  {
    "Title": "Star Wars: The Last Jedi",
    "Year": 2017,
    "Genre": {
      "Name": "Action",
      "Age": "12+"
    },
    "Plot": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    "Director": {
      "Name": "Rian Johnson",
      "Age": 48,
      "Year": 1969
    }
  },
  {
    "Title": "Black Swan",
    "Year": 2010,
    "Genre": {
      "Name": "Thriller",
      "Age": "16+"
    },
    "Plot": "A committed dancer wins the lead role in a production of Tchaikovskys 'Swan Lake' only to find herself struggling to maintain her sanity.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
    "Director": {
      "Name": "Darren Aronofsky",
      "Age": 52,
      "Year": 1969
    }
  },
  {
    "Title": "Fight Club",
    "Year": 1999,
    "Genre": {
      "Name": "Drama",
      "Age": "16+"
    },
    "Plot": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5N73E@._V1_SX300.jpg",
    "Director": {
      "Name": "David Fincher",
      "Age": 60,
      "Year": 1962
    }
  },
  {
    "Title": "The Godfather: Part II",
    "Year": 1974,
    "Genre": {
      "Name": "Crime, Drama",
      "Age": "18+"
    },
    "Plot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Director": {
      "Name": "Francis Ford Coppola",
      "Age": 84,
      "Year": 1939
    }
  }
];

let users = [
  {
    id: 1,
    name: "Abi",
    favouriteMovies: []
  },
  {
    id: 2,
    name: "Bob",
    favouriteMovies: ["Fight Club"]
  }
]

// Create: allow users to add new users
app.post('/users', (req, res) => {
  const newUser = req.body; //requires bodyParser
  
  if (newUser.name) { //(newUser.name) resolves to true not empty string or null or undefined
      newUser.id = uuid.v4();
      users.push(newUser);
      res.status(201).json(newUser);
  }
  else {
    res.status(400).send('users need names');
  }

})

// Delete: allow user to remove user
app.delete('/users/:id', (req, res) => {
  const {id} = req.params; //requires bodyParser
  
  let user = users.find( user => user.id == id);

  if (user) {
    //users = user.filter( user  => user.id != id); // code doesn't work
    res.status(200).send(`User ${id} has been deleted`);
    }
    else {
      res.status(400).send('no such user');
    }
})

// Update: allow users to update info
app.put('/users/:id', (req, res) => {
  const {id} = req.params;
  const updatedUser = req.body; //requires bodyParser
  
  let user = users.find( user => user.id == id );

  if (user) {
    user.name = updatedUser.name;
    res.status(200).json(user);
  }
  else {
    res.status(400).send('no such user');
  }

})

// Create: allow user to add movie to their favourites list
app.post('/users/:id/:movieTitle', (req, res) => {
  const {id, movieTitle} = req.params; //requires bodyParser
  
  let user = users.find( user => user.id == id);

  if (user) {
    user.favouriteMovies.push(movieTitle);
    res.status(200).send(`${movieTitle} has been added to user ${id}'s array`);
    }
    else {
      res.status(400).send('no such user');
    }
})

// Delete: allow user to remove movie
app.delete('/users/:id/:movieTitle', (req, res) => {
  const {id, movieTitle} = req.params; //requires bodyParser
  
  let user = users.find( user => user.id == id);

  if (user) {
    user.favouriteMovies = user.favouriteMovies.filter(title => title !== movieTitle);
    res.status(200).send(`${movieTitle} has been removed from user ${id}'s array`);
    }
    else {
      res.status(400).send('no such user');
    }
})

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie database!');
});

// Get: read list of movies
app.get('/movies', (req, res) => {                  
  res.status(200).json(movies);
});

// Get: list all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// Get: read info from movies array when searched by title
app.get('/movies/:title', (req, res) => {                  
  //const title = req.params.title; 
  const {title} = req.params; // this line of code is equal to the one above
  const movie = movies.find(movie => movie.Title.toLowerCase() === title.toLowerCase()); // applies find method to movies array, takes funct as arg. => when true, do sth -> when movieTitle = title, send to const movie var

  if (movie) {
    res.status(200).json(movie); //not a return function, add return before res.status for return function
  }
  else {
    res.status(400).send('No such movie')
  }
});

// Get: read info about genre when searched by genre
app.get('/movies/genre/:genreName', (req, res) => {                  
  //const title = req.params.title;
  const {genreName} = req.params; // this line of code is equal to the one above
  const genre = movies.find(genre => movie.Genre.name.toLowerCase() === genreName.toLowerCase()).Genre; 

  if (genre) {
    res.status(200).json(genre); //not a return function, add return before res.status for return function // code doesn't work
    res.status(200).send('genre info')
  }
  else {
    res.status(400).send('No such movie')
  }
});

// Get: read info from movies array when searched by director
app.get('/movies/directors/:directorName', (req, res) => {                  
  //const title = req.params.title;
  const {directorName} = req.params; // this line of code is equal to the one above
  const director = movies.find(genre => movie.Director.name.toLowerCase() === directorName.toLowerCase()).director; 

  if (director) {
    res.status(200).json(director); //not a return function, add return before res.status for return function
  }
  else {
    res.status(400).send('No such director')
  }
});


//error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// listen for requests app.listen(port_number, (function) called when server starts listening
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

