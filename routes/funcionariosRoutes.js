const express = require('express');
const router = express.Router();
const funcionariosController = require('../controllers/funcionariosController');

router.use('/', funcionariosController);


module.exports = router;