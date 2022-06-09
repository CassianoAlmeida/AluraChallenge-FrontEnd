import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        preco: {type: Number, required: true},
        descricao: {type: String, required: true},
        categoria: {type: String, required: true}
    }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;