import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import crypto from 'crypto';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.resolve('files'));
//     },
//     filename: (req, file, cb) => {
//         const ext = path.extname(file.originalname);
//         const name = path.basename(file.originalname, ext);
//         cb(null, `${name}-${Date.now()}${ext}`);
//     },
// });

const storage = multer.diskStorage({
  destination: "files",
  filename: function(req, file, cb){
    crypto.randomBytes(20, (err, buf) => {
      cb(null, buf.toString("hex") + path.extname(file.originalname))
    })
  }
});


const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const conditions = ["png", "jpg", "jpeg", "application/pdf","image/jpeg"];
  const type = file.mimetype;

  console.log("MIME DO ARQUIVO", type)
    if (conditions.includes(`${type}`)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only PDF or Images is allowed.'));
    }
};


const upload = multer({
  storage: storage, fileFilter
}).fields([{name: "file"}, {name: "fileBl"}]);

export default upload;
