const PORT = process.env.PORT || 3000
const ROOT_PATH = process.env.PWD
const DATABASE_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/todo_list'

module.exports = {
  PORT,
  ROOT_PATH,
  DATABASE_URL
}
