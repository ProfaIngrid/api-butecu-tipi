const express = require('express');
const router = express.Router();
const dbConecta = require('../models/dbConnection');

router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM tbfuncionario', (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = `select * from tbfuncionario where id_funcionario = ${id}`;
    dbConecta.query(query, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});




module.exports = router;