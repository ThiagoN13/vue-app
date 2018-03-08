const Users = require('../models/users')

function create (req, res) {
  const { user } = req.body

  Promise.resolve(user)
    .then(save)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).send({ message: error.message, stack: error.stack }))

  async function save (user) {
    try {
      await Users.save(user)

      return user
    } catch (error) {
      throw error
    }
  }
}

function update (req, res) {
  const { user } = req.body

  Promise.resolve({ user })
    .then(save)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).send({ message: error.message, stack: error.stack }))

  async function save (user) {
    const { _id } = user

    try {
      await Users.updateItem({ _id }, user)

      return user
    } catch (error) {
      throw error
    }
  }
}

module.exports = {
  create,
  update
}
