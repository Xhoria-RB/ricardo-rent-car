const router = require('express').Router();
const FuelType = require('../models/FuelType');
const BaseEndpoint = require('./baseEndpoint');

const fuelTypes = new BaseEndpoint(FuelType);

router.get('/fuel_type', async (_, res) => {
  try {
    res.json(await fuelTypes.getAll());
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/fuel_type', async (req, res) => {
  try {
    res.json(await fuelTypes.createOne(req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/fuel_type/:id', async (req, res) => {
  try {
    res.json(await fuelTypes.getById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/fuel_type/:id', async (req, res) => {
  try {
    res.json(await fuelTypes.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/fuel_type/:id', async (req, res) => {
  try {
    res.json(await fuelTypes.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
