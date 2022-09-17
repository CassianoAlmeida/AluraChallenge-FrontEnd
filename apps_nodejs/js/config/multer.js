import multer from "multer";

const multerConfig = {
    dest: 'src/assets/img',
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'src/assets/img');
        },
        filename: (req, file, cb) => {
            let ext = file.originalname.
                substring(file.originalname.lastIndexOf('.'), file.originalname.length);
            const fileName = `${String((Date.now())).slice(0, -3)}-${file.originalname}`
            cb(null, fileName);
           
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if(allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }
}

export default multerConfig;