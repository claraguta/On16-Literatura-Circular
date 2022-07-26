const DoadoresModel = require('../models/doadoresModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createDoador = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash
  
    try {
        const { nome, cidade, estado, email, senha, dispostoAPagar } = req.body
        
        const newDoador = new DoadoresModel ({
            nome, cidade, estado, email, senha, dispostoAPagar
        })

        const savedDoador = await newDoador.save()

        res.status(201).json(savedDoador)
    } catch (error) {
        console.error(error)
        res.status(500).json ({ message: error.message})

    }
}

const updateDoador = async (req, res) => {
 
  try {
    const { nome, cidade, estado, email, senha, dispostoAPagar } = req.body
   await DoadoresModel.findByIdAndUpdate(req.params.id, {
      nome, cidade, estado, email, senha, dispostoAPagar
    })

    const updatedDoador = await DoadoresModel.findById(req.params.id)
    res.status(200).json(updatedDoador)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteDoador = async (req, res) => {
    try {
        const { id } = req.params
        await DoadoresModel.findByIdAndDelete(id)
        const message = `O doador com o ${id} foi deletado com sucesso`
        res.status(200).json({message})
    }catch (error) {
    console.error(error)
    res.status(500).json({message: error.message})
    }
}

const findAllDoadores = async (req, res) => {
  try {
      const allDoadores = await DoadoresModel.find()
      res.status(200).json(allDoadores)
  } catch (error) {
      console.error(error)
      res.status(500).json({message: error.message})
  }
}

 
module.exports = {
    createDoador,
    updateDoador,
    deleteDoador,
    findAllDoadores
    }