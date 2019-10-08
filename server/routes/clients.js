const router = require('express').Router();
const Clients = require('../models/Client');
const BaseEndpoint = require('./baseEndpoint');
const { ERRORS } = require('./helpers/constants');
const validateID = require('./helpers/validateIDCard');

const clients = new BaseEndpoint(Clients);

router.get('/client', async (_, res) => {
  try {
    res.json(await clients.getAll()
      .sort({ fullname: 'asc' }));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/client', async (req, res) => {
  try {
    if (validateID(req.body.idCard)) {
      res.json(await clients.createOne(req.body));
    }
    else {
      res.status(400).json({ error: ERRORS.invalid_data });
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/client/:id', async (req, res) => {
  try {
    res.json(await clients.getById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/client/:id', async (req, res) => {
  try {
    res.json(await clients.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/client/:id', async (req, res) => {
  try {
    res.json(await clients.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
