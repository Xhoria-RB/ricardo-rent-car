const router = require('express').Router();
const Rents = require('../models/Rent');
const Clients = require('../models/Client');
const BaseEndpoint = require('./baseEndpoint');

const rents = new BaseEndpoint(Rents);

router.get('/rents', async (_, res) => {
  try {
    res.json(await rents.getAll());
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/rents', async (req, res) => {
  try {
    res.json(await rents.createOne(req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/rents/:id', async (req, res) => {
  // try {
  Rents.findAll({
    where: {
      id: req.params.id
    },
    include: [
      { model: Clients, where: { id: 1 } }
      // { model: Cars },
      // { model: Employees }

    ]
  })
    .then((rent) => {
      res.json(rent);
    })
    .catch((err) => res.json(err));
  //   if (isEmpty(searchedRents)) {
  //     res.status(400).json({ error: ERRORS.incorrect_id });
  //   }
  //   res.json(searchedRents);
  // }
  // catch (err) {
  //   res.status(500).json(err);
  // }
});

router.put('/rents/:id', async (req, res) => {
  try {
    res.json(await rents.updateById(req.params.id, req.body));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/rents/:id', async (req, res) => {
  try {
    res.json(await rents.deleteById(req.params.id));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
