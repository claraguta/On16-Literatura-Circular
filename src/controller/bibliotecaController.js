const BibliotecaModel = require('../models/bibliotecasModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createBiblioteca = async (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash

    try {
        const { nome, cidade, estado, publica, email, senha, dispostoAPagar } = req.body
        
        const newBiblioteca = new BibliotecaModel({
            nome, cidade, estado, publica, email, senha, dispostoAPagar
        })

        const savedBiblioteca = await newBiblioteca.save()

        res.status(201).json(savedBiblioteca)
    } catch (error) {
        console.error(error)
        res.status(500).json ({ message: error.message})

    }
}

const findAllBibliotecas = async (req, res) => {
    try {

      const authHeader = req.get('authorization')
      
      if (!authHeader) {
        return res.status(401).send('Não foi possível autenticar sua autorização')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function (err) {
        if (err) {
          return res.status(403).send('Senha inválida')
        }

        const allBibliotecas = await BibliotecaModel.find()
        res.status(200).json(allBibliotecas)
      })
       
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const updateBiblioteca = async (req, res) => {
    try {
      const { nome, cidade, estado, publica, email, senha, dispostoAPagar } = req.body
     await BibliotecaModel.findByIdAndUpdate(req.params.id, {
        nome, cidade, estado, publica, email, senha, dispostoAPagar
      })

      const updatedBiblioteca = await BibliotecaModel.findById(req.params.id)
      res.status(200).json(updatedBiblioteca)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
  }

const deleteBiblioteca = async (req, res) => {
    try {
        const { id } = req.params
        await BibliotecaModel.findByIdAndDelete(id)
        const message = `A biblioteca com o ${id} foi deletado com sucesso`
        res.status(200).json({message})
    }catch (error) {
    console.error(error)
    res.status(500).json({message: error.message})
    }
}

const findBibliotecaById = async (req, res) => {
    try {
      const findBiblioteca = await BibliotecaModel.findById(req.params.id)
      res.status(200).json(findBiblioteca)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
 }

 const loginBiblioteca = (req, res) => {
  BibliotecaModel.findOne({ email: req.body.email }, function (error, biblioteca) {
      
    if (!biblioteca) {
          return res.status(404).send(`Não existe biblioteca registrada com o email ${req.body.email}`);
      }

      const senhaValida = bcrypt.compareSync(req.body.senha, biblioteca.senha);

      if (!senhaValida) {
      
          return res.status(403).send('senha inválida');
      }
      const token = jwt.sign({ email: req.body.email }, SECRET);
      return res.status(200).send(token);
  });
}
 
module.exports = {
    createBiblioteca,
    findAllBibliotecas,
    updateBiblioteca,
    deleteBiblioteca,
    findBibliotecaById,
    loginBiblioteca
}