var users = [
  {
    Username: "sarah_brown",
    Password: "your_secure_password",
    Email: "sarah.brown@example.com",
    Birthday: "1991-08-20",
    Bio: "I work in marketing and have a strong interest in independent cinema. I also love traveling and exploring new cuisines.",
    FavoriteMovies: [ObjectId("654ac25f13dbddcc01fee490")]
  },
  {
    Username: "john_doe",
    Password: "johns_secure_password",
    Email: "john.doe@example.com",
    Birthday: "1985-05-12",
    Bio: "Passionate about storytelling through films. I enjoy both classic and modern cinema, and I'm always looking for hidden gems.",
    FavoriteMovies: [ObjectId("654ac25f13dbddcc01fee490")]
  },
  {
    Username: "film_buff123",
    Password: "secure_password123",
    Email: "film.buff123@example.com",
    Birthday: "1990-11-03",
    Bio: "Aspiring filmmaker with a love for the art of storytelling. I spend my weekends exploring film festivals and analyzing cinematic techniques.",
    FavoriteMovies: [ObjectId("654ac25f13dbddcc01fee490")]
  },
  {
    Username: "cinema_lover",
    Password: "password_cinema",
    Email: "cinema.lover@example.com",
    Birthday: "1988-02-28",
    Bio: "A cinephile at heart. My weekends are dedicated to watching films from different genres, and I'm always excited to discuss the latest releases.",
    FavoriteMovies: [ObjectId("654ac25f13dbddcc01fee490")]
  },
  {
    Username: "film_geek",
    Password: "geeky_password",
    Email: "film.geek@example.com",
    Birthday: "1993-09-15",
    Bio: "Obsessed with the technical aspects of filmmaking. I love analyzing cinematography, editing, and sound design to gain a deeper understanding of the craft.",
    FavoriteMovies: [ObjectId("654ac25f13dbddcc01fee490")]
  },
  {
    Username: "art_of_cinema",
    Password: "secure_art_password",
    Email: "art.of.cinema@example.com",
    Birthday: "1987-06-10",
    Bio: "Believer in the transformative power of cinema. My journey involves exploring the intersections of art, culture, and storytelling through film.",
    FavoriteMovies: [ObjectId("654ac25f13dbddcc01fee490")]
  },
  {
    Username: "movie_maven",
    Password: "maven_password",
    Email: "movie.maven@example.com",
    Birthday: "1995-04-25",
    Bio: "Dedicated to discovering hidden cinematic gems. My weekends are spent exploring film history and diving into the rich world of international cinema.",
    FavoriteMovies: [ObjectId("654ac25f13dbddcc01fee490")]
  }
];
  
  db.users.insertMany(users);
  