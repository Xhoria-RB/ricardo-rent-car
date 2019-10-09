const router = require('express').Router();
const bcrypt = require('bcrypt');
const Employees = require('../models/Employee');
const BaseEndpoint = require('./baseEndpoint');

const employees = new BaseEndpoint(Employees);

router.get('/employee', async (_, res) => {
  try {
    res.json(await employees.getAll()
      .sort({ fullname: 'asc' }));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/employee/:id', async (req, res) => {
  try {
    res.json(await employees.getById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/employee/:id', async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    res.json(await employees.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/employee/:id', async (req, res) => {
  try {
    res.json(await employees.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
