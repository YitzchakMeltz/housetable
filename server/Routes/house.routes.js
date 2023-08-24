const express = require('express');
const houseControllers = require('../Controllers/house.controllers');
const router = express.Router();

router.post('/', houseControllers.create);
router.get('/:id', houseControllers.get);
router.put('/:id', houseControllers.update);

module.exports = router