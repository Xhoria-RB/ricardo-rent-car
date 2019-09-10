const router = require('express').Router();
const Model = require('../models/Model');
const BaseEndpoint = require('./baseEndpoint');

const model = new BaseEndpoint(Model);

router.get('/models', async (_, res) => {
  try {
    res.json(await model.getAll());
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/models', async (req, res) => {
  try {
    res.json(await model.createOne(req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/models/:id', async (req, res) => {
  try {
    res.json(await model.getById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/models/:id', async (req, res) => {
  try {
    res.json(await model.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/models/:id', async (req, res) => {
  try {
    res.json(await model.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
