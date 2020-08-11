const conn = require('../database/connection');

class ProductController {
    
    all(req, res) {
        conn.promise().query(`select * from produto`)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            return error;
        })
    }

    newProduct(req, res) {
        conn.promise().query(`insert into produto (nome, valorUnit, qtdeEstoque)
        values(?, ?, ?)`,
        [req.body.nome, req.body.valorUnit, req.body.qtdeEstoque])
        .then(data => {
            res.status(201).send({
                msg: 'Produto cadastrado com sucesso'
            });
        })
        .catch((error) => {
            console.log(error)
        })
    }

    productUpdate(req, res) {
        conn.promise().query(`update produto 
            set nome = ?, 
            valorUnit = ?, 
            qtdeEstoque = ?
            where idProd = ?`,
        [req.body.nome, req.body.valorUnit, req.body.qtdeEstoque, req.body.id])
        .then(data => {
            res.status(200).send({
                msg: 'Produto atualizado com sucesso',
                data
            })
        })
    }

    productDelete(req, res) {
        conn.promise().query(`delete from produto where idProd = ?`,
        [req.body.id])
        .then(data => {
            res.status(200).send({
                msg: 'Produto excluído com sucesso',
                data
            });
        })
        .catch((error) => {
            res.status(500).send({
                msg: "Deu ruim ao tentar excluir ",
                error
            })
        })
    }
}

module.exports = new ProductController;
