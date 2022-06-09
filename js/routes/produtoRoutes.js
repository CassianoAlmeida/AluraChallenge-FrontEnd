import express from "express";
import ProdutoController from "../controller/produtosController.js";

const router = express.Router();

router
    .get("/produtos", ProdutoController.listaProdutos)
    .get("/produtos/:id", ProdutoController.listaProdutosPorId)
    .post("/produtos", ProdutoController.criaProduto)
    .put("/produtos/:id", ProdutoController.atualizaProduto)
    .delete("/produtos/:id", ProdutoController.excluiProduto)


export default router;