migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0z81qgc77j2ewm")

  // remove
  collection.schema.removeField("9c9h7nwf")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0z81qgc77j2ewm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9c9h7nwf",
    "name": "dob",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
