/**
 * Created by Mothra on 9/14/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }, //plus all the security hashing stuffs
    admin: { type: Boolean, required: true },
});

module.exports = mongoose.model('User', UserSchema);