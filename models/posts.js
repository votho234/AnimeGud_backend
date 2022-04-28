const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    type: String,
    synopsis: String,
    score: String,
    image: String,
    created: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Post", postSchema);