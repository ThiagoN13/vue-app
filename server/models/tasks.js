const mongoose = require('mongoose')
const libExtends = require('../lib/mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

function createModel () {
  const ColectionName = 'tasks'

  const usuarioModel = new Schema({
    name: {
      type: String,
      required: true
    },

    status: {
      type: Boolean,
      default: false
    },

    user: {
      type: ObjectId,
      required: true,
      ref: 'users'
    },

    description: {
      type: String
    },

    priority: {
      type: Number,
      default: 0
    },

    startDate: {
      type: Date,
      default: Date.now,
      required: true
    },

    dateEnd: {
      type: Date,
      required: true
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
