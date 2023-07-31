migrate((db) => {
  const collection = new Collection({
    "id": "ogdfdnms9h4l3tw",
    "created": "2023-07-31 05:26:30.849Z",
    "updated": "2023-07-31 05:26:30.849Z",
    "name": "keep_notes_data",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "whhhk1ps",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "p6tgc0h9",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ogdfdnms9h4l3tw");

  return dao.deleteCollection(collection);
})
