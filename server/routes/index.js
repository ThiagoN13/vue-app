const taskRoutes = require('./task')

module.exports = function (app, router) {
  taskRoutes(app, router)
}
