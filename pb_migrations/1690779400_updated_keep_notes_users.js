migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0z81qgc77j2ewm")

  // remove
  collection.schema.removeField("rwwgxivv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0z81qgc77j2ewm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rwwgxivv",
    "name": "notes",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
