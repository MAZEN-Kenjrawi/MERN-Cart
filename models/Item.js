const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        requried: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.export = Item = mongoose.model('item', ItemSchema);