const express = require('express');
const {checkoutCtrlFunction, cartSuccessFunction} = require('../controllers/checkoutCtrlFile');
const router = express.Router();

router.post('/', checkoutCtrlFunction);
router.get('/success', cartSuccessFunction);

module.exports = router;