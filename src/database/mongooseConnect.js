const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require("mongoose")

const connect = async () => {
    try {
      await mongoose.connect(DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log("Conectado ao banco de dados");
    } catch (error) {
      console.error(error);
    }
  };
  
  module.exports = {connect} 