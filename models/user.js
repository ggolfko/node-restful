var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// user schema

var UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true,
    select: false // when we query the list of users , there will be no need to provide the password
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// Hash the password befoer the user is saved

UserSchema.pre('save', function(next) {
  var user = this;

  // Hash the passworld only if the password has been changed or user is new
  if (!user.isModified('password')) return next();

  // generate the hash
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);

    // change the password to the hash version
    user.password = hash;
    next();
  });
});

// Method to compare a given password with the database hash
UserSchema.methods.comparePassword = function(password) {
  var user = this;

  return bcrypt.compareSync(password, user.password);
}

// return the model
module.exports = mongoose.model('User', UserSchema);
