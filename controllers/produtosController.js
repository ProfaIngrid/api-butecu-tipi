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


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const query = `DELETE FROM tbprodutos WHERE id_produto = ?`;

    dbConecta.query(query, [id], (err, result) =>{
        if (err) throw err;
        res.status(201).json({
            mensagem: `Produto de id: ${id}, deletado com sucesso!`
        })
    });
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {id_produto, nome, valor, quantidade} = req.body;
    const query = `UPDATE tbprodutos SET id_produto = ?, 
        nome = ?, valor = ?, quantidade = ? 
        WHERE id_produto = ?`

    dbConecta.query(query, [id_produto, nome, valor, quantidade, id], (err)=>{
        if(err) throw err;
        res.status(201).json({
            mensagem: `Alteração aplicada!`,
            envio: {
                id_produto : id_produto,
                nome: nome,
                valor: valor,
                quantidade: quantidade
            }
        })
    })
});
    




module.exports = router;