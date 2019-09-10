const router = require('express').Router();
const FuelType = require('../models/FuelType');
const BaseEndpoint = require('./baseEndpoint');

const fuelTypes = new BaseEndpoint(FuelType);

router.get('/fuel_types', async (_, res) => {
  try {
    res.json(await fuelTypes.getAll());
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/fuel_types', async (req, res) => {
  try {
    res.json(await fuelTypes.createOne(req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/fuel_types/:id', async (req, res) => {
  try {
    res.json(await fuelTypes.getById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/fuel_types/:id', async (req, res) => {
  try {
    res.json(await fuelTypes.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/fuel_types/:id', async (req, res) => {
  try {
    res.json(await fuelTypes.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
