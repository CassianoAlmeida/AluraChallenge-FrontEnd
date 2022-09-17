import express from "express";
import multer from "multer";
import multerConfig from "../config/multer.js"

const router = express.Router();

router
    .get("/imagem", (req, res) =>{res.status(200).send({titulo: "Imagem"})})
    .post("/imagem", multer(multerConfig).single('image'), (req, res) => {
        res.status(201);
    })

export default router;