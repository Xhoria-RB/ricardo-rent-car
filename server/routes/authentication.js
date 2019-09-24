const router = require('express').Router();
const bcrypt = require('bcrypt');
const BaseEndpoint = require('./baseEndpoint');
const Employee = require('../models/Employee');
const { ERRORS } = require('./helpers/constants');
const validateID = require('./helpers/validateIDCard');

const employee = new BaseEndpoint(Employee);

router.post('/register', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    if (validateID(req.body.idCard)) {
      res.json(await employee.createOne({ ...req.body }));
    }
    else {
      res.status(400).json({
        error: ERRORS.invalid_id_card_number
      });
    }
  }
  catch (err) {
    res.status(400).json({
      error: err.message,
      message: ERRORS.invalid_data
    });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await employee.getByEmail(email);
    if (await bcrypt.compare(password, user.password)) {
      res.json({
        OK: true,
        fullName: user.fullName,
        email: user.email,
        // eslint-disable-next-line no-underscore-dangle
        id: user._id
      });
    }
    else {
      res.status(400).json({
        error: ERRORS.incorrect_login
      });
    }
  }
  catch (err) {
    res.status(500).json({
      error: ERRORS.invalid_data
    });
  }
});

module.exports = router;
