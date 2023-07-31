migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogdfdnms9h4l3tw")

  // remove
  collection.schema.removeField("tjaixr1y")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogdfdnms9h4l3tw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tjaixr1y",
    "name": "email",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "i0z81qgc77j2ewm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "email"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
