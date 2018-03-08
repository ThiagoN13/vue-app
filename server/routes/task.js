const TaskController = require('../controllers/TaskController')

module.exports = function (app, router) {
  router.route('/task')
    .all((req, res, next) => {
      // Verificar permissão
      next()
    })
    .get(TaskController.find)
    .post(TaskController.create)
    .put(TaskController.update)
}
