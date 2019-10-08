const router = require('express').Router();
const Rents = require('../models/Rent');

router.get('/report', async (_, res) => {
  try {
    res.json(await Rents.find()
      .populate('clientID')
      .populate('employeeID')
      .populate({
        path: 'carID',
        populate: { path: 'brandID modelID fuelTypeID carTypeID' }
      })
      .populate('inspectionID'));
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
