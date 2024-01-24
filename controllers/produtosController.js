const express = require('express');
const router = express.Router();
const dbConecta = require('../models/dbConnection');

router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM tbprodutos', (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

module.exports = router;