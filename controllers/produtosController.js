const express = require('express');
const router = express.Router();
const dbConecta = require('../models/dbConnection');

router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM tbprodutos', (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = `select * from tbprodutos where id_produto = ${id}`;
    dbConecta.query(query, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

router.post('/', (req,res) => {
    const {id_produto, nome, valor, quantidade} = req.body;
    const query = `INSERT INTO tbprodutos (id_produto, nome, valor, quantidade) VALUES (?,?,?,?)`;
    
    dbConecta.query(query,[id_produto, nome, valor, quantidade], (err) => {
        if(err) throw err;
        res.status(201).json({
            mensagem: 'Produto adicionado!', 
            body: req.body
        });
    });
});


module.exports = router;