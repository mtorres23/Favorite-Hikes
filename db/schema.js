var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;



var HikeSchema = new Schema({
    first_name: String,
    last_name: String,
    town: String,
    state: String,
    rate: String,
    description: String,
    length: String

});

var UserSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  created_at: Date,
  updated_at: Date
});




HikeSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

UserSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});


var UserModel = mongoose.model('User', UserSchema);
var HikeModel = mongoose.model('Hike', HikeSchema);


module.exports = {
    User: UserModel,
    Hike: HikeModel
};
