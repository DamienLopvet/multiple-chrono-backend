const express = require('express');
const router = express.Router();


const auth = require('../middleware/auth');

const chronosCtrl = require('../controllers/chrono');

 router.post('/', auth, chronosCtrl.createChrono);
// router.put('/:id', auth, chronosCtrl.modifyChrono);
// router.delete('/:id', auth, chronosCtrl.deleteChrono);
// router.get('/', auth, chronosCtrl.getAllChronos);                          

module.exports = router;
