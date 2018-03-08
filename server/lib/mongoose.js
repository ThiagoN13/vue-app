module.exports = function (Model) {
  function get (query = {}) {
    return this.findOne(query)
  }

  function query (query = {}) {
    return this.find(query)
  }

  function save (doc) {
    let _doc

    try {
      _doc = new this(doc)

      return _doc.save()
    } catch (error) {
      return new Promise((resolve, reject) => reject(error))
    }
  }

  function updateItem (query = { _id: undefined }, doc, options = { multi: false }) {
    try {
      return this.update(query, doc, options)
    } catch (error) {
      return new Promise((resolve, reject) => reject(error))
    }
  }

  function logicalRemove (query = []) {
    if (!Array.isArray(query) || query.length <= 0) return

    return this.updateMany({ _id: { $in: query }}, { $set: { active: false }})
  }

  Model.statics = {
    get,
    query,
    save,
    updateItem,
    logicalRemove
  }
}
