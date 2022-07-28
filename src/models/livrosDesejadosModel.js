const mongoose = require('mongoose')

const livroDesejadoSchema = mongoose.Schema({
    _id:{
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

    genero: {
        type: [String],
        required: true
    },

    emailDoInteressado: {
        type: String,
        required: true,        
    }

}, { timestamps: true})

const LivrosDesejadosModel = mongoose.model('livroDesejado', livroDesejadoSchema)
module.exports = LivrosDesejadosModel

