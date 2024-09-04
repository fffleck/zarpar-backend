"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
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
const storage = multer_1.default.diskStorage({
    destination: "files",
    filename: function (req, file, cb) {
        crypto_1.default.randomBytes(20, (err, buf) => {
            cb(null, buf.toString("hex") + path_1.default.extname(file.originalname));
        });
    }
});
const fileFilter = (req, file, cb) => {
    const conditions = ["png", "jpg", "jpeg", "application/pdf", "image/jpeg"];
    const type = file.mimetype;
    console.log("MIME DO ARQUIVO", type);
    if (conditions.includes(`${type}`)) {
        cb(null, true);
    }
    else {
        cb(new Error('Invalid file type. Only PDF or Images is allowed.'));
    }
};
const upload = (0, multer_1.default)({
    storage: storage, fileFilter
}).fields([{ name: "file" }, { name: "fileBl" }]);
exports.default = upload;
