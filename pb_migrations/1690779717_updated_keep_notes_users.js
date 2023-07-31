migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0z81qgc77j2ewm")

  collection.indexes = [
    "CREATE INDEX `idx_GDJ9a2L` ON `keep_notes_users` (`email`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0z81qgc77j2ewm")

  collection.indexes = []

  return dao.saveCollection(collection)
})
