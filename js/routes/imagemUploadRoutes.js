import express from "express";
import ImagemUploadController from "../controller/ImagemUploadController.js";
import multer from "multer";
import multerConfig from "../config/multer.js"



const router = express.Router();

router
    .get("/imagem", (req, res) =>{res.status(200).send({titulo: "Imagem"})})
    .post("/imagem", multer({dest: 'img/'}).single('file'), (req, res) => {
        console.log('hello');
    })

export default router;