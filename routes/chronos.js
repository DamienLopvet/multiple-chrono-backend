const express = require('express');
const router = express.Router();


const auth = require('../middleware/auth');

const chronosCtrl = require('../controllers/chrono');

router.post('/', auth, chronosCtrl.createChrono);
router.put('/', auth, chronosCtrl.updateChrono);
router.delete('/', auth, chronosCtrl.deleteChrono);
router.get('/', auth, chronosCtrl.getAllChronos);                          

module.exports = router;
