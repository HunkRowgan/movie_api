var movies = [
  {
    Title: "The Shawshank Redemption",
    Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    Genre: {
      Name: "Drama",
      Description: "Drama films typically explore complex human emotions and interpersonal relationships.",
    },
    Director: {
      Name: "Frank Darabont",
      Bio: "Frank Darabont is a Hungarian-American film director, screenwriter, and producer. He was born in 1959.",
      Birth: "1959",
      Death: null,
    },
    ImagePath: "shawshankredemption.png",
    Featured: true,
    ReleaseYear: 1994,
    Actors: ["Tim Robbins", "Morgan Freeman"],
  },
  {
    Title: "Pulp Fiction",
    Description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    Genre: {
      Name: "Crime",
      Description: "Crime films feature characters who violate the law and engage in criminal behavior. They often explore moral ambiguity.",
    },
    Director: {
      Name: "Quentin Tarantino",
      Bio: "Quentin Tarantino is an American filmmaker and screenwriter. He was born in 1963.",
      Birth: "1963",
      Death: null,
    },
    ImagePath: "pulpfiction.png",
    Featured: true,
    ReleaseYear: 1994,
    Actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
  },
  {
    Title: "Forrest Gump",
    Description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    Genre: {
      Name: "Drama",
      Description: "Drama films typically explore complex human emotions and interpersonal relationships.",
    },
    Director: {
      Name: "Robert Zemeckis",
      Bio: "Robert Zemeckis is an American film director, producer, and screenwriter. He was born in 1951.",
      Birth: "1951",
      Death: null,
    },
    ImagePath: "forrestgump.png",
    Featured: true,
    ReleaseYear: 1994,
    Actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
  },
  {
    Title: "Inception",
    Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    Genre: {
      Name: "Science Fiction",
      Description: "Science fiction films explore imaginative and futuristic concepts often based on scientific principles.",
    },
    Director: {
      Name: "Christopher Nolan",
      Bio: "Christopher Nolan is a British-American film director, producer, and screenwriter. He was born in 1970.",
      Birth: "1970",
      Death: null,
    },
    ImagePath: "inception.png",
    Featured: true,
    ReleaseYear: 2010,
    Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  },
  {
    Title: "The Dark Knight",
    Description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Genre: {
      Name: "Action",
      Description: "Action films typically involve intense physical and dynamic activity, including violence and combat.",
    },
    Director: {
      Name: "Christopher Nolan",
      Bio: "Christopher Nolan is a British-American film director, producer, and screenwriter. He was born in 1970.",
      Birth: "1970",
      Death: null,
    },
    ImagePath: "darkknight.png",
    Featured: true,
    ReleaseYear: 2008,
    Actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
  {
    Title: "Schindler's List",
    Description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    Genre: {
      Name: "Drama",
      Description: "Drama films typically explore complex human emotions and interpersonal relationships.",
    },
    Director: {
      Name: "Steven Spielberg",
      Bio: "Steven Spielberg is an American film director, producer, and screenwriter. He was born in 1946.",
      Birth: "1946",
      Death: null,
    },
    ImagePath: "schindlerslist.png",
    Featured: true,
    ReleaseYear: 1993,
    Actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
  },
  {
    Title: "The Godfather",
    Description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    Genre: {
      Name: "Crime",
      Description: "Crime films feature characters who violate the law and engage in criminal behavior. They often explore moral ambiguity.",
    },
    Director: {
      Name: "Francis Ford Coppola",
      Bio: "Francis Ford Coppola is an American film director, producer, and screenwriter. He was born in 1939.",
      Birth: "1939",
      Death: null,
    },
    ImagePath: "thegodfather.png",
    Featured: true,
    ReleaseYear: 1972,
    Actors: ["Marlon Brando", "Al Pacino", "James Caan"],
  },
  {
    Title: "The Matrix",
    Description: "A computer programmer discovers a dystopian world ruled by machines and joins a group of rebels who fight against them.",
    Genre: {
      Name: "Science Fiction",
      Description: "Science fiction films explore imaginative and futuristic concepts often based on scientific principles.",
    },
    Director: {
      Name: "The Wachowskis",
      Bio: "The Wachowskis are American film directors, writers, and producers. They were born in 1965 (Lana) and 1967 (Lilly).",
      Birth: "1965",
      Death: null,
    },
    ImagePath: "matrix.png",
    Featured: true,
    ReleaseYear: 1999,
    Actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  },
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Description: "A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy a powerful ring and prevent an evil lord from conquering Middle-earth.",
    Genre: {
      Name: "Fantasy",
      Description: "Fantasy films often feature magical elements, mythical creatures, and imaginary worlds.",
    },
    Director: {
      Name: "Peter Jackson",
      Bio: "Peter Jackson is a New Zealand film director, producer, and screenwriter. He was born in 1961.",
      Birth: "1961",
      Death: null,
    },
    ImagePath: "fellowshipofthering.png",
    Featured: true,
    ReleaseYear: 2001,
    Actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
  },
  {
    Title: "The Avengers",
    Description: "A group of superheroes, including Iron Man, Thor, and Captain America, team up to save the world from a powerful enemy.",
    Genre: {
      Name: "Action",
      Description: "Action films typically involve intense physical and dynamic activity, including violence and combat.",
    },
    Director: {
      Name: "Joss Whedon",
      Bio: "Joss Whedon is an American filmmaker, writer, and director. He was born in 1964.",
      Birth: "1964",
      Death: null,
    },
    ImagePath: "avengers.png",
    Featured: true,
    ReleaseYear: 2012,
    Actors: ["Robert Downey Jr.", "Chris Hemsworth", "Chris Evans"],
  },
  {
    Title: "Avatar",
    Description: "A paraplegic marine is dispatched to the moon Pandora on a unique mission and becomes torn between following orders and protecting an alien civilization.",
    Genre: {
      Name: "Science Fiction",
      Description: "Science fiction films explore imaginative and futuristic concepts often based on scientific principles.",
    },
    Director: {
      Name: "James Cameron",
      Bio: "James Cameron is a Canadian filmmaker, director, and environmentalist. He was born in 1954.",
      Birth: "1954",
      Death: null,
    },
    ImagePath: "avatar.png",
    Featured: true,
    ReleaseYear: 2009,
    Actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
  },
  {
    Title: "Gladiator",
    Description: "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
    Genre: {
      Name: "Action",
      Description: "Action films typically involve intense physical and dynamic activity, including violence and combat.",
    },
    Director: {
      Name: "Ridley Scott",
      Bio: "Ridley Scott is an English film director and producer. He was born in 1937.",
      Birth: "1937",
      Death: null,
    },
    ImagePath: "gladiator.png",
    Featured: true,
    ReleaseYear: 2000,
    Actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
  },
  {
    Title: "Interstellar",
    Description: "A group of explorers embarks on a journey through a wormhole to find a new habitable planet as Earth faces environmental collapse.",
    Genre: {
      Name: "Science Fiction",
      Description: "Science fiction films explore imaginative and futuristic concepts often based on scientific principles.",
    },
    Director: {
      Name: "Christopher Nolan",
      Bio: "Christopher Nolan is a British-American film director, producer, and screenwriter. He was born in 1970.",
      Birth: "1970",
      Death: null,
    },
    ImagePath: "interstellar.png",
    Featured: true,
    ReleaseYear: 2014,
    Actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  },
  {
    Title: "Kill Bill: Volume 1",
    Description: "A former assassin, known as The Bride, seeks revenge against her former colleagues who betrayed her on her wedding day.",
    Genre: {
      Name: "Action",
      Description: "Action films typically involve intense physical and dynamic activity, including violence and combat.",
    },
    Director: {
      Name: "Quentin Tarantino",
      Bio: "Quentin Tarantino is an American filmmaker and screenwriter. He was born in 1963.",
      Birth: "1963",
      Death: null,
    },
    ImagePath: "killbill.png",
    Featured: true,
    ReleaseYear: 2003,
    Actors: ["Uma Thurman", "David Carradine", "Lucy Liu"],
  },
  {
    Title: "The Departed",
    Description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    Genre: {
      Name: "Crime",
      Description: "Crime films feature characters who violate the law and engage in criminal behavior. They often explore moral ambiguity.",
    },
    Director: {
      Name: "Martin Scorsese",
      Bio: "Martin Scorsese is an American filmmaker, director, and screenwriter. He was born in 1942.",
      Birth: "1942",
      Death: null,
    },
    ImagePath: "thedeparted.png",
    Featured: true,
    ReleaseYear: 2006,
    Actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
  }
];

db.movies.insertMany(movies);