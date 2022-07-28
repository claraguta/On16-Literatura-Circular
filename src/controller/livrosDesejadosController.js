const LivrosDisponiveisModel = require('../models/livrosDisponiveisModel')
const livrosDesejadosModel = require('../models/livrosDesejadosModel')
const doadoresModel = require('../models/doadoresModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const LivrosDesejadosModel = require('../models/livrosDesejadosModel')
const SECRET = process.env.SECRET

const createWishedBook = async (req, res) => {

  try{
      const authHeader = req.get('authorization')
      if(!authHeader){
          return res.status(401).send('É necessário uma senha')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function(erro){
          if(erro){
              return res.status(403).send('senha inválida')
          }
          const {titulo, autore, editora, genero, emailDoInteressado} = req.body
          const newWishedBook = new LivrosDesejadosModel ({
          titulo, autore, editora, genero, emailDoInteressado
          })
          const savedWishedBook = await newWishedBook.save()
          const message = `O livro ${savedWishedBook.titulo} foi criado com sucesso`
          res.status(201).json(message)
      })        
  } catch (erro) {
      console.error(erro)
      res.status(500).json({message: error.message})
  }
}

const deleteWishedBook = async (req, res) => {
  
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
  
        const { id } = req.params
        await LivrosDesejadosModel.findByIdAndDelete(id)
        const message = `O livro com o id ${id} foi deletado com sucesso`
        res.status(200).json({message})
  })
  
    }catch (error) {
    console.error(error)
    res.status(500).json({message: error.message})
    }
}

const updateWishedBook = async (req, res) => {
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
     const { titulo, autore, editora, genero, comentarios, emailDoInteressado } = req.body
     await LivrosDesejadosModel.findByIdAndUpdate(req.params.id, {
          titulo, autore, editora, genero, comentarios, emailDoInteressado
      })

      const updatedWishedBook = await LivrosDesejadosModel.findById(req.params.id)
      const message = `O livro ${updatedWishedBook.titulo} foi atualizado com sucesso`
      res.status(200).json(message)
    })
    
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
  }

  const getAllWishedBooks = async (req, res) => {
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
  
        const getAllWishedBooks = await LivrosDesejadosModel.find()
        res.status(200).json(getAllWishedBooks)
        })
  
        } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
      }
    }
  
    
  const getWishedBooksByTitle = async (req, res) => {

    try{
        const authHeader = req.get('authorization')
        if(!authHeader){
            return res.status(401).send('É necessário uma senha')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function(erro){
            if(erro){
                return res.status(403).send('senha inválida')
            }
            
            const { titulo: titulo } = req.query;
            const findWishedBookByTitle = await LivrosDesejadosModel.find({ titulo: titulo });
            res.status(200).json(findWishedBookByTitle);
            })        
    } catch (erro) {
        console.error(erro)
        res.status(500).json({message: error.message})
    }
}

const getWishedBooksByGenre = async (req, res) => {

  try{
      const authHeader = req.get('authorization')
      if(!authHeader){
          return res.status(401).send('É necessário uma senha')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function(erro){
          if(erro){
              return res.status(403).send('senha inválida')
          }
          
          const { genero: genero } = req.query;
          const findWishedBookByGenre = await LivrosDesejadosModel.find({ genero: genero });
          res.status(200).json(findWishedBookByGenre);
          })        
  } catch (erro) {
      console.error(erro)
      res.status(500).json({message: error.message})
  }
}

const getWishedBookByLibrary = async (req, res) => {

  try{
      const authHeader = req.get('authorization')
      if(!authHeader){
          return res.status(401).send('É necessário uma senha')
      }

      const token = authHeader.split(' ')[1]

      await jwt.verify(token, SECRET, async function(erro){
          if(erro){
              return res.status(403).send('senha inválida')
          }
          
          const { emailDoInteressado: emailDoInteressado } = req.query;
          const findBooksByLibrary = await LivrosDesejadosModel.find({ emailDoInteressado: emailDoInteressado });
          res.status(200).json(findBooksByLibrary);
          })        
  } catch (erro) {
      console.error(erro)
      res.status(500).json({message: error.message})
  }
}


  

module.exports = {
  createWishedBook,
  deleteWishedBook,
  updateWishedBook,
  getAllWishedBooks,
  getWishedBooksByTitle,
  getWishedBooksByGenre,
  getWishedBookByLibrary

}