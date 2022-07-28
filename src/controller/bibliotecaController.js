const BibliotecaModel = require('../models/bibliotecasModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { query } = require('express')
const SECRET = process.env.SECRET

const createLibrary = async (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash

    try {
        const { nome, cidade, estado, publica, email, senha, dispostoAPagar } = req.body
        
        const newLibrary = new BibliotecaModel({
            nome, cidade, estado, publica, email, senha, dispostoAPagar
        })

        const savedLibrary = await newLibrary.save()

        res.status(201).json(savedLibrary)
    } catch (error) {
        console.error(error)
        res.status(500).json ({ message: error.message})

    }
}

const findAllLibraries = async (req, res) => {
    try {

        const allLibrariees = await BibliotecaModel.find()
        res.status(200).json(allLibrariees)
             
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
  }

const updateLibrary = async (req, res) => {
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
     const { nome, cidade, estado, publica, email, senha, dispostoAPagar } = req.body
     await BibliotecaModel.findByIdAndUpdate(req.params.id, {
        nome, cidade, estado, publica, email, senha, dispostoAPagar
      })

      const updatedLibrary = await BibliotecaModel.findById(req.params.id)
      res.status(200).json(updatedLibrary)
    })
    
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
  }

const deleteLibrary = async (req, res) => {
  
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
        await BibliotecaModel.findByIdAndDelete(id)
        const message = `A biblioteca com o ${id} foi deletada com sucesso`
        res.status(200).json({message})
  })
  
    }catch (error) {
    console.error(error)
    res.status(500).json({message: error.message})
    }
}

const findLibraryById = async (req, res) => {
    try {
      const findLibrary = await BibliotecaModel.findById(req.params.id)
      res.status(200).json(findLibrary)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
 }

 const loginLibrary = (req, res) => {
  BibliotecaModel.findOne({ email: req.body.email }, function (error, biblioteca) {
      
    if (!biblioteca) {
          return res.status(404).send(`Não existe biblioteca registrada com o email ${req.body.email}`);
      }

      const passwordOk = bcrypt.compareSync(req.body.senha, biblioteca.senha);

      if (!passwordOk) {
      
          return res.status(403).send('senha inválida');
      }
      const token = jwt.sign({ email: req.body.email }, SECRET);
      return res.status(200).send(token);
  });
}

const getLibraryByState = async(req, res) => {
  try {
      const findState = await BibliotecaModel.find({estado: req.query.estado})
      res.status(200).json(findState)
  } catch(error){
      console.error(error)
      res.status(500).json({ message: error.message})
  }
}

const getLibraryByCity = async(req, res) => {
  try {
      const findCity = await BibliotecaModel.find({cidade: req.query.cidade})
      res.status(200).json(findCity)
  } catch(error){
      console.error(error)
      res.status(500).json({ message: error.message})
  }
}
 

const getLibraryPay = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { dispostoAPagar } = req.query;
      const findPayment = await BibliotecaModel.find({
        dispostoAPagar: dispostoAPagar,
      });
      if (!findPayment.length && dispostoAPagar == "true") {
        return res.status(404).json({ 
          message: "There are no libraries willing to pay" 
        });
      }
      if (findPayment.length < 1 && dispostoAPagar == "false") {
        return res.status(404).json({
          message: "There are no libraries willing to pay" 
        });
      }
      res.status(200).json(findPayment);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPublicLibrary = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { publica } = req.query;
      const findPublic = await BibliotecaModel.find({
        publica: publica,
      });
      if (!findPublic.length && publica == "true") {
        return res.status(404).json({ 
          message: "There are no libraries willing to pay" 
        });
      }
      if (findPublic.length < 1 && publica == "false") {
        return res.status(404).json({
          message: "There are no libraries willing to pay" 
        });
      }
      res.status(200).json(findPublic);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    createLibrary,
    findAllLibraries,
    updateLibrary,
    deleteLibrary,
    findLibraryById,
    loginLibrary, 
    getLibraryByState,
    getLibraryByCity,
    getLibraryPay,
    getPublicLibrary       
}