/**
 * Created by Mothra on 9/14/15.
 */
//this is where the Schema will go for the costumes
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CostumeSchema = new Schema({
    idLetter: { type: String, required: true },
    idNumber: { type: Number, required: true },
    catagory: { type: string, required: true },
    gender: { type: String },
    color: { type: String, required: true },
    size: { type: String, required: true },
    shoulders: { type: Number },
    chest: { type: Number },
    napeToHem: { type: NUmber },
    description: { type: String },
    isCheckedOut: { type: Boolean },
    show: { type: Object },
    cast: { type: Object }
});

module.exports = mongoose.model('Costume', CostumeSchema);