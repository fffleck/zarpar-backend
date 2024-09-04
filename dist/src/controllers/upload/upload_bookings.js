"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPdf = void 0;
const multer_config_1 = __importDefault(require("../../config/multer_config"));
const booking_service_1 = __importDefault(require("../../services/booking.service"));
const uploadPdf = (req, res) => {
    (0, multer_config_1.default)(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        const files = req.files;
        const file = (_a = files['file'][0]) !== null && _a !== void 0 ? _a : false;
        const fileBl = (_b = files['fileBl'][0]) !== null && _b !== void 0 ? _b : false;
        if (file) {
            req.body.bookingFile = file.path;
        }
        if (fileBl) {
            req.body.blFile = fileBl.path;
        }
        const update = yield booking_service_1.default.updateBooking(req.body, req.body.id);
        if (update) {
            res.status(200).json({
                message: 'Upload realizado com sucesso',
            });
        }
        else {
            res.status(400).json({ error: 'Ocorreu um erro, tente novamente mais tarde' });
        }
    }));
};
exports.uploadPdf = uploadPdf;
