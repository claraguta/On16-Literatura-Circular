const mongoose = require('mongoose')

const doadorSchema = mongoose.Schema({
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

const doadoresModel = mongoose.model('doador', doadorSchema)

module.exports = doadoresModel

