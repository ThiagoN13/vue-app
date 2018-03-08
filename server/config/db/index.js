const mongoose = require('mongoose')
const env = require('../env')

const uri = env.DATABASE_URL

mongoose.connect(uri)

mongoose.connection.on('connected', () => {
  console.log('Database conectada em ' + uri)
})

mongoose.connection.on('disconnected', () => {
  console.log('Database nao conectada em ' + uri)
})

mongoose.connection.on('erro', (erro) => {
  console.log('Erro ao conectar-se a database ' + erro)
})

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Desconectado, ao terminio da aplicação')
    process.exit(0)
  })
})
