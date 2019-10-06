const router = require('express').Router();
const isEmpty = require('lodash/isEmpty');
const Rents = require('../models/Rent');
const Cars = require('../models/Car');
const BaseEndpoint = require('./baseEndpoint');

const rents = new BaseEndpoint(Rents);

router.get('/rent', async (_, res) => {
  try {
    res.json(await rents.getAll()
      .populate('clientID')
      .populate('employeeID')
      .populate('carID'));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/rent', async (req, res) => {
  try {
    const rent = await rents.createOne(req.body);
    if (!isEmpty(rent)) {
      await Cars.findByIdAndUpdate(req.body.carID, { carStatus: 'Rented' });
    }
    res.json(rent);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/rent/:id', async (req, res) => {
  try {
    res.json(await Rents.findById(req.params.id)
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

router.put('/rent/:id', async (req, res) => {
  try {
    res.json(await rents.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/rent/:id', async (req, res) => {
  try {
    res.json(await rents.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
