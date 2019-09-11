const router = require('express').Router();
const Model = require('../models/Model');
const BaseEndpoint = require('./baseEndpoint');

const model = new BaseEndpoint(Model);

router.get('/model', async (_, res) => {
  try {
    res.json(await model.getAll());
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/model', async (req, res) => {
  try {
    res.json(await model.createOne(req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/model/:id', async (req, res) => {
  try {
    res.json(await Model.findById(req.params.id)
      .populate('brandID'));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/model/:id', async (req, res) => {
  try {
    res.json(await model.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/model/:id', async (req, res) => {
  try {
    res.json(await model.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
