const LivrosModel = require('../models/doadoresModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createLivro = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash
  
    try {
        const { titulo, autore, editora, comentarios } = req.body
        
        const newLivro = new LivrosModel ({
            titulo, autore, editora, comentarios
        })

        const savedLivro = await newLivro.save()

        res.status(201).json(savedLivro)
    } catch (error) {
        console.error(error)
        res.status(500).json ({ message: error.message})

    }
}

module.exports = {
    createLivro
}