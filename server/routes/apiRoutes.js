const router = require('express').Router();

router.use(require('./brands'));
router.use(require('./carTypes'));
router.use(require('./models'));
router.use(require('./employees'));
router.use(require('./clients'));
router.use(require('./rents'));
router.use(require('./cars'));
router.use(require('./fuelTypes'));
router.use(require('./inspections'));

module.exports = router;
