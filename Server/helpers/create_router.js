const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

  const router = express.Router();


  router.get('/', (req, res) => {
    const id = req.query;
    collection
      .find(id)
      .toArray()
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.delete('/:id', (req, res) => {
    let id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      id = ObjectId(id);
    }
    collection
      .deleteOne({ _id: id })
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });


  router.put('/:id', (req, res) => {
    let id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      id = ObjectId(id);
    }

    let updatedData = req.body;
    collection
      .updateOne(
        { _id: id },
        { $set: updatedData },
        { upsert: true }
      )
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });

  });

  return router;

};

module.exports = createRouter;