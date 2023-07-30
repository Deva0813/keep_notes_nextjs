migrate((db) => {
  const collection = new Collection({
    "id": "i0z81qgc77j2ewm",
    "created": "2023-07-29 13:31:31.915Z",
    "updated": "2023-07-29 13:31:31.915Z",
    "name": "keep_notes_users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8qslkqia",
        "name": "username",
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
        "id": "sizmby0a",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "6ii27jyb",
        "name": "password",
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
        "id": "9c9h7nwf",
        "name": "dob",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "rwwgxivv",
        "name": "notes",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("i0z81qgc77j2ewm");

  return dao.deleteCollection(collection);
})
