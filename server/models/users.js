const mongoose = require('mongoose')
const libExtends = require('../lib/mongoose')
const { Schema } = mongoose

function createModel () {
  const ColectionName = 'users'

  const usuarioModel = new Schema({
    name: {
      type: String,
      required: true
    },

    login: {
      type: String,
      minlength: 4,
      required: false,
      index: {
        unique: true
      }
    },

    password: {
      type: String,
      minlength: 4,
      required: true
    },

    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },

    active: {
      type: Boolean,
      default: true
    }
  }, { collection: ColectionName })

  libExtends(usuarioModel)

  return mongoose.model(ColectionName, usuarioModel)
}

module.exports = createModel()
