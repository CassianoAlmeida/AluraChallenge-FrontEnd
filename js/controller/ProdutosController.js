import produtos from "../model/Produto.js"

class ProdutoController {

    //get
    static listaProdutos = (req, res) => {
        produtos.find((err, produtos) => {
            res.status(200).json(produtos)
        })
    }

    //get p/ id
    static listaProdutosPorId = (req, res) => {
        const id = req.params.id;

        produtos.findById(id)
            .populate('nome')
            .exec((err, produtos) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - Id do produto não localizado`})
                } else {
                    res.status(200).send(produtos);
                }
            })
    }

    //post
    static criaProduto = (req, res) => {
        let produto = new produtos(req.body);

        produto.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar produto.`})
            } else {
                res.status(201).send(produto.toJSON())
            }

        })
    }

    //put
    static atualizaProduto = (req, res) => {
        const id = req.params.id;

        produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Produto atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    //delete
    static excluiProduto = (req, res) => {
        const id = req.params.id;

        produtos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Produto removido com sucesso.'})
            } else { 
                res.status(500).send({message: err.message})
            }
        })
    }


}

export default ProdutoController;