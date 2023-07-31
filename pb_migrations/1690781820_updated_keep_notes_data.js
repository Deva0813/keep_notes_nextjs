migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogdfdnms9h4l3tw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxjanbdh",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogdfdnms9h4l3tw")

  // remove
  collection.schema.removeField("rxjanbdh")

  return dao.saveCollection(collection)
})
