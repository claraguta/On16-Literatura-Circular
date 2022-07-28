const LivrosDejadosModel = require('../models/livrosDesejadosModel')
const LivrosDisponiveisModel = require('../models/livrosDisponiveisModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const LivrosDesejadosModel = require('../models/livrosDesejadosModel')
const SECRET = process.env.SECRET

const getAllAvailableBooks = async (req, res) => {
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

      const AllAvailableBooks = await LivrosDisponiveisModel.find()
      res.status(200).json(AllAvailableBooks)
      })

      } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
  }

const getAvailableBooksbyTitle = async (req, res) => {

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
          const findAvailableBookbyTitle = await LivrosDisponiveisModel.find({ titulo: titulo });
          res.status(200).json(findAvailableBookbyTitle);
          })        
  } catch (erro) {
      console.error(erro)
      res.status(500).json({message: error.message})
  }
}

const getAvailableBooksbyGenre = async (req, res) => {

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
          const findAvailableBookbyGenre = await LivrosDisponiveisModel.find({ genero: genero });
          res.status(200).json(findAvailableBookbyGenre);
          })        
  } catch (erro) {
      console.error(erro)
      res.status(500).json({message: error.message})
  }
}

const createAvailableBook = async (req, res) => {

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
          const {titulo, autore, editora, genero, comentarios, emailDoDoador} = req.body
          const newAvailableBook = new LivrosDisponiveisModel({
          titulo, autore, editora, genero, comentarios, emailDoDoador
          })
          const savedAvailableBook = await newAvailableBook.save()
          const message = `O livro ${savedAvailableBook.titulo} foi criado com sucesso`
          res.status(201).json(message)
      })        
  } catch (erro) {
      console.error(erro)
      res.status(500).json({message: error.message})
  }
}

const deleteAvailableBook = async (req, res) => {
  
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
        await LivrosDisponiveisModel.findByIdAndDelete(id)
        const message = `O livro com o id ${id} foi deletado com sucesso`
        res.status(200).json({message})
  })
  
    }catch (error) {
    console.error(error)
    res.status(500).json({message: error.message})
    }
}

const updateAvailableBooks = async (req, res) => {
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
     const { titulo, autore, editora, genero, comentarios, emailDoDoador } = req.body
     await LivrosDisponiveisModel.findByIdAndUpdate(req.params.id, {
          titulo, autore, editora, genero, comentarios, emailDoDoador
      })

      const updatedAvailableBook = await LivrosDisponiveisModel.findById(req.params.id)
      const message = `O livro ${updatedAvailableBook.titulo} foi atualizado com sucesso`
      res.status(200).json(message)
    })
    
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
  }

  const getAvailableBookByDoner = async (req, res) => {

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
            
            const { emailDoDoador: emailDoDoador } = req.query;
            const findBooksByDonor = await LivrosDisponiveisModel.find({ emailDoDoador: emailDoDoador });
            res.status(200).json(findBooksByDonor);
            })        
    } catch (erro) {
        console.error(erro)
        res.status(500).json({message: error.message})
    }
}



module.exports = {
  getAvailableBooksbyTitle,
  getAllAvailableBooks,
  getAvailableBooksbyGenre,
  createAvailableBook,
  deleteAvailableBook,
  updateAvailableBooks,
  getAvailableBookByDoner
}