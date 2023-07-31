migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogdfdnms9h4l3tw")

  // remove
  collection.schema.removeField("rxjanbdh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfld8wck",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "i0z81qgc77j2ewm",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "email"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("sfld8wck")

  return dao.saveCollection(collection)
})
