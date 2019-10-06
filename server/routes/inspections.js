const router = require('express').Router();
const Inspections = require('../models/Inspection');
const BaseEndpoint = require('./baseEndpoint');

const inspections = new BaseEndpoint(Inspections);

router.get('/inspection', async (_, res) => {
  try {
    res.json(await inspections.getAll()
      .populate('clientID')
      .populate('employeeID')
      .populate('carID'));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/inspection', async (req, res) => {
  try {
    res.json(await inspections.createOne(req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/inspection/:id', async (req, res) => {
  try {
    res.json(await Inspections.findById(req.params.id)
      .populate('clientID')
      .populate('employeeID')
      .populate({
        path: 'carID',
        populate: { path: 'brandID modelID fuelTypeID carTypeID' }
      }));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/inspection/:id', async (req, res) => {
  try {
    res.json(await inspections.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/inspection/:id', async (req, res) => {
  try {
    res.json(await inspections.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
