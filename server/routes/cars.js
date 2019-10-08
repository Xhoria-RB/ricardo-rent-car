const router = require('express').Router();
const Cars = require('../models/Car');
const BaseEndpoint = require('./baseEndpoint');

const cars = new BaseEndpoint(Cars);

router.get('/car', async (_, res) => {
  try {
    res.json(await cars.getAll()
      .populate('brandID')
      .populate('modelID')
      .sort({ description: 'asc' }));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/car', async (req, res) => {
  try {
    res.json(await cars.createOne(req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/car/:id', async (req, res) => {
  try {
    res.json(await Cars.findById(req.params.id)
      .populate('carTypeID')
      .populate('brandID')
      .populate('modelID')
      .populate('fuelTypeID'));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/car/:id', async (req, res) => {
  try {
    res.json(await cars.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/car/:id', async (req, res) => {
  try {
    res.json(await cars.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
