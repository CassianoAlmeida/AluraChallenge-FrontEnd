import express from "express";
import multer from "multer";


class ImagemUploadController {
    static ImagemUploadController = (req, res) => {
        console.log(req.file);
        return res.json({ hello: "World"})
    }
}

export default ImagemUploadController;