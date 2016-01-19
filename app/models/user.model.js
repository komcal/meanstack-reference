var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    reqired: true
  },
  email: {
    type: String,
    index: true,
    match: /.+\@.+\.+/
  },
  password: {
    type: String,
    validate: [
      function(password){
        return password && password.length >=6;
      },
      'Password must be at least 6 charecters'
    ]
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User',UserSchema);
