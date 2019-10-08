const router = require('express').Router();
const Brands = require('../models/Brand');
const BaseEndpoint = require('./baseEndpoint');
const { ERRORS } = require('./helpers/constants');

const brand = new BaseEndpoint(Brands);

router.get('/brand', async (_, res) => {
  try {
    res.json(await brand.getAll()
      .sort({ description: 'asc' }));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/brand', async (req, res) => {
  try {
    res.json(await brand.createOne(req.body));
  }
  catch (err) {
    res.status(400).json({ ...err, message: ERRORS.empty_data });
  }
});

router.get('/brand/:id', async (req, res) => {
  try {
    const brands = await brand.getById(req.params.id);
    if (!brands) {
      res.status(400).json({ error: ERRORS.incorrect_id });
    }
    res.json(brands);
  }
  catch (err) {
    res.status(422).json(err);
  }
});

router.put('/brand/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await brand.updateById(id, req.body);
    res.json(await brand.getById(id));
  }
  catch (err) {
    res.status(400).json({ error: ERRORS.incorrect_id });
  }
});

router.delete('/brand/:id', async (req, res) => {
  try {
    res.json(await brand.deleteById(req.params.id));
  }
  catch (err) {
    res.status(400).json({ error: ERRORS.incorrect_id });
  }
});

module.exports = router;
