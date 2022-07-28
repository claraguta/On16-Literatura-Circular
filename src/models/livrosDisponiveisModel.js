const mongoose = require('mongoose')

const livroDisponivelSchema = mongoose.Schema({
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

    comentarios: {
        type: [String],
        required: false,
        default: "não há"
    },

    emailDoDoador: {
        type: String,
        required: true,        
    }

}, { timestamps: true})

const LivrosDisponiveisModel = mongoose.model('livroDisponivel', livroDisponivelSchema)
module.exports = LivrosDisponiveisModel

