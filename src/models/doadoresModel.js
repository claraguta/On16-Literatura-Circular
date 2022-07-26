const mongoose = require('mongoose')

const doadoresSchema = mongoose.Schema({
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
      type: "boolean",
      required: true
  
}}, { timestamps: true,
      versionkey: false }) 

const doadoresModel = mongoose.model('doadores', doadoresSchema)

module.exports = doadoresModel

