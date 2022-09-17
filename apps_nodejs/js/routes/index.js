import express from "express";
import produtos from "./produtoRoutes.js";
import upload from "./imagemUploadRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Alura Geek"})
    })

    app.use(
        express.json(),
        produtos,
        upload
    )
}

export default routes;