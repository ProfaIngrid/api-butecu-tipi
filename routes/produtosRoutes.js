const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.use('/', produtosController);


module.exports = router;