const mongoose = require('mongoose');

//import bcrypt
const bcrypt = require('bcrypt');

let movieSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Genre: {
        Name: {type: String, required: true},
        Description: {type: String, required: true}
    },
    Director: {
        Name: {type: String, required: true},
        Bio: {type: String, required: true},
        Birth: {type: Date, required: true},
        Death: {type: Date, required: true}
    },
    ImagePath: String,
    Featured: Boolean,
    ReleaseYear: Date,
    Actors: [String]

});

let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    Bio: {type: String, required: true},
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
  });

userSchema.statics.hashPassword = (password) => {
return bcrypt.hashSync(password, 10);
};
  
userSchema.methods.validatePassword = function(password) {
return bcrypt.compareSync(password, this.Password);
};

let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

module.exports.Movie = Movie;
module.exports.User = User;