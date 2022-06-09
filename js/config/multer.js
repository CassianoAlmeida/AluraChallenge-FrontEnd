import multer from "multer";
import path from "path";
import url from "url";

//const urlPath = new URL('../../src/assets/img', import.meta.url);

const multerConfig = {
    //dest: path.resolve(__dirname, '..', '..', 'src', 'img'),
    //dest: urlPath,
    dest: '../../src/assets/img',
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            //cb(null, path.resolve(__dirname, '..', '..', 'src', 'img'));
            cb(null, urlPath);
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`
                cb(null, fileName);
            })
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cd) => {
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