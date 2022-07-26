require("dotenv-safe").config();
const express = require("express");
const cors = require("cors"); 
const swaggerFile = require("../swagger/swagger_output.json");
const swaggerUi = require("swagger-ui-express");
const app = express();
const mongooose = require("./database/mongooseConnect")

const bibliotecasRoutes = require('./routes/bibliotecasRoutes')
const doadoresRoutes = require('./routes/doadoresRoutes')
const livrosRoutes = require('./routes/livrosRoutes')

app.use(express.json());
app.use(cors());
app.use("/documentacao-literatura-circular", swaggerUi.serve, swaggerUi.setup(swaggerFile));
mongooose.connect()

app.use(livrosRoutes)
app.use(bibliotecasRoutes)
app.use(doadoresRoutes)


module.exports = app