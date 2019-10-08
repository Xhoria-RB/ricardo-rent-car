const router = require('express').Router();
const CarTypes = require('../models/CarType');
const BaseEndpoint = require('./baseEndpoint');
const { ERRORS } = require('./helpers/constants');

const carType = new BaseEndpoint(CarTypes);

router.get('/car_type', async (_, res) => {
  try {
    res.json(await carType.getAll()
      .sort({ description: 'asc' }));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/car_type', async (req, res) => {
  try {
    res.json(await carType.createOne(req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/car_type/:id', async (req, res) => {
  const carTypes = await carType.getById(req.params.id);
  if (!carTypes) {
    res.status(400).json({ error: ERRORS.incorrect_id });
  }
  res.json(carTypes);
});

router.put('/car_type/:id', async (req, res) => {
  try {
    res.json(await carType.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(400).json({ error: ERRORS.incorrect_id });
  }
});

router.delete('/car_type/:id', async (req, res) => {
  try {
    res.json(await carType.deleteById(req.params.id));
  }
  catch (err) {
    res.status(400).json({ error: ERRORS.incorrect_id });
  }
});

module.exports = router;
