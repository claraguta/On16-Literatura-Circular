const mongoose = require('mongoose')

const bibliotecaSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },

  nome: {
    type: String, 
    required: true
  },

  cidade: {
    type: String,
    required: true
  },

  estado: {
    type: String,
    required: true
  },

  publica: {
    type: Boolean, required: true

  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  senha: {
    type: String,
    required: true

  },

  dispostoAPagar: {
    type: Boolean, required: true    
  
}}, { timestamps: true,
      versionkey: false }) 

const bibliotecasModel = mongoose.model('biblioteca', bibliotecaSchema)

module.exports = bibliotecasModel