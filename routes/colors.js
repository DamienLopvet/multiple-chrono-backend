const express = require('express');
const router = express.Router();


const auth = require('../middleware/auth');

const colorsCtrl = require('../controllers/colors');

router.post('/', auth, colorsCtrl.createColor);
router.put('/:id', auth, colorsCtrl.updateColor);
router.get('/', auth, colorsCtrl.getPrimaryColor);                          

module.exports = router;
