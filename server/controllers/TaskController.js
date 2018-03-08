const Tasks = require('../models/tasks')

function create (req, res) {
  const { task } = req.body

  Promise.resolve(task)
    .then(save)
    .then(task => res.status(200).json(task))
    .catch(error => res.status(500).send({ message: error.message, stack: error.stack }))

  async function save (task) {
    try {
      await Tasks.save(task)

      return task
    } catch (error) {
      throw error
    }
  }
}

function get (req, res) {
  const { _id } = req.params

  Promise.resolve(_id)
    .then(_id => Tasks.get({ _id }).exec())
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(500).send({ message: error.message, stack: error.stack }))
}

function find (req, res) {
  const query = { active: true }

  Promise.resolve(query)
    .then(query => Tasks.query(query).exec())
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(500).send({ message: error.message, stack: error.stack }))
}

function logicalRemove (req, res) {
  const { ids } = req.body

  Promise.resolve(ids)
    .then(_logicalRemove)
    .then(ids => res.status(200).json(ids))
    .catch(error => res.status(500).send({ message: error.message, stack: error.stack }))

  async function _logicalRemove (ids) {
    try {
      await Tasks.logicalRemove(ids)

      return ids
    } catch (error) {
      throw error
    }
  }
}

function update (req, res) {
  const { task } = req.body

  Promise.resolve({ task })
    .then(save)
    .then(task => res.status(200).json(task))
    .catch(error => res.status(500).send({ message: error.message, stack: error.stack }))

  async function save (task) {
    const { _id } = task

    try {
      await Tasks.updateItem({ _id }, task)

      return task
    } catch (error) {
      throw error
    }
  }
}

module.exports = {
  create,
  get,
  find,
  logicalRemove,
  update
}
