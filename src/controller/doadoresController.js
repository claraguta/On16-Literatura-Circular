const DoadoresModel = require('../models/doadoresModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createDonor = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash
  
    try {
        const { nome, cidade, estado, email, senha, dispostoAPagar } = req.body
        
        const newDonor = new DoadoresModel ({
            nome, cidade, estado, email, senha, dispostoAPagar
        })

        const savedDonor = await newDonor.save()

        res.status(201).json(savedDonor)
    } catch (error) {
        console.error(error)
        res.status(500).json ({ message: error.message})

    }
}

const updateDonor = async (req, res) => {
 
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

   const { nome, cidade, estado, email, senha, dispostoAPagar } = req.body
   await DoadoresModel.findByIdAndUpdate(req.params.id, {
      nome, cidade, estado, email, senha, dispostoAPagar
    })

    const updatedDonor = await DoadoresModel.findById(req.params.id)
    res.status(200).json(updatedDonor)
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteDonor = async (req, res) => {
  
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
        await DoadoresModel.findByIdAndDelete(id)
        const message = `O doador com o ${id} foi deletada com sucesso`
        res.status(200).json({message})
  })
  
    }catch (error) {
    console.error(error)
    res.status(500).json({message: error.message})
    }
}

const getAllDonors = async (req, res) => {
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

      const allDonors = await DoadoresModel.find()
      res.status(200).json(allDonors)
      })

      } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
  }


const loginDonor = (req, res) => {
  DoadoresModel.findOne({ email: req.body.email }, function (error, doadores) {
      
    if (!doadores) {
          return res.status(404).send(`Não existe doadore registrade com o email ${req.body.email}`);
      }

      const senhaValida = bcrypt.compareSync(req.body.senha, doadores.senha);

      if (!senhaValida) {
      
          return res.status(403).send('senha inválida');
      }
      const token = jwt.sign({ email: req.body.email }, SECRET);
      return res.status(200).send(token);
  });
}

const getDonorsPaying = async (req, res) => {
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
      const findPayment = await DoadoresModel.find({
        dispostoAPagar: dispostoAPagar,
      });
      if (!findPayment.length && dispostoAPagar == "true") {
        return res.status(404).json({ 
          message: "There are no donors willing to pay" 
        });
      }
      if (findPayment.length < 1 && dispostoAPagar == "false") {
        return res.status(404).json({
          message: "There are no donors willing to pay" 
        });
      }
      res.status(200).json(findPayment);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 
module.exports = {
    createDonor,
    updateDonor,
    deleteDonor,
    getAllDonors,
    loginDonor,
    getDonorsPaying
    }