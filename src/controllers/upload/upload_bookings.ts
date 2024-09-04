import {Request, Response} from "express";
import upload from '../../config/multer_config'
import bookingService from "../../services/booking.service";

export const uploadPdf = (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const file = files['file'][0] ?? false
    const fileBl = files['fileBl'][0] ?? false;
    
    if (file) { req.body.bookingFile = file.path }
    if (fileBl) { req.body.blFile = fileBl.path }
    

    const update = await bookingService.updateBooking(req.body, req.body.id)

    if (update) {
      res.status(200).json({
        message: 'Upload realizado com sucesso',
      });
    } else {
      res.status(400).json({ error: 'Ocorreu um erro, tente novamente mais tarde'});
    }
    
  });
};
