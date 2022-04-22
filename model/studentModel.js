const mongoose = require('mongoose');

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)