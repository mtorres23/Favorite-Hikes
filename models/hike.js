var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');

var HikeSchema = new Schema({
    first_name: String,
    last_name: String,
    town: String,
    state: String,
    rate: String,
    description: String,
    length: String
   
});

HikeSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

HikeSchema.virtual('fullName').get(function () {
    return this.first_name + ' ' + this.last_name;
});

var UserSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  list: [ListSchema],
  created_at: Date,
  updated_at: Date
});


module.exports = mongoose.model("Hike", HikeSchema);