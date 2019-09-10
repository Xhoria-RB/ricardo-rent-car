const router = require('express').Router();
const Employees = require('../models/Employee');
const BaseEndpoint = require('./baseEndpoint');

const employees = new BaseEndpoint(Employees);

router.get('/employees', async (_, res) => {
  try {
    res.json(await employees.getAll());
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/employees/:id', async (req, res) => {
  try {
    res.json(await employees.getById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/employees/:id', async (req, res) => {
  try {
    res.json(await employees.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/employees/:id', async (req, res) => {
  try {
    res.json(await employees.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
