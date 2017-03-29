// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// mongoose.Promise = require('bluebird');

// var UserSchema = new Schema({
//   username: String,
//   email: String,
//   password_digest: String,
//   created_at: Date,
//   updated_at: Date
// });


// UserSchema.pre('save', function(next) {
//     now = new Data();
//     this.updated_at = now;
//     if ( !this.created_at ) {
//         this.created_at = now;
//     }
//     next();
// });

// var UserModel = mongoose.model('User', UserSchema);

// module.exports = {
//     User: UserModel
// }