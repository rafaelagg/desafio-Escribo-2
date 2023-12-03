const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const { userRouter } = require('./routes/userRouter')

// middlewares
app.use(express.urlencoded({
    extended: true
    }),
)
app.use(express.json())
app.use('/user', userRouter)

// Conectar ao MongoDB
const dbURL = process.env.DB_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURL, options)
  .then(() => {
    console.log('Conexão bem-sucedida ao MongoDB!');
    app.listen(3001, ()=>{
      console.log('Server is running');
  })
})
.catch((err) => {
    console.error('Erro na conexão ao MongoDB:', err.message);
});

