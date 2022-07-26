const mongoose = require('mongoose')

const LivrosSchema = mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    titulo: {
        type: String,
        required: true
    },

    autore: {
        type: [String],
        required: true
    },

    editora: {
        type: String,
        required: true
    },

    comentarios: {
        type: [String],
        required: false,
        default: "não há"
    }

}, { timestamps: true})

const LivrosModel = mongoose.model('livros', LivrosSchema)
module.exports - LivrosModel

