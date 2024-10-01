import mongoose from 'mongoose';

// Document interface
export interface Ibooking extends mongoose.Document {
    qtdContainers: string,
    armador: string,
    contractNumber: string,
    bookingOffice: string,
    shipper: string,
    forwarder: string,
    consignee: string,
    shipperRefNumber: string,
    forward_ref_number: string,
    purchaseOrderNumber: string,
    moveType: string,
    porto_embarque: string,
    data_embarque: string,
    porto_descarga: string,
    data_chegada: string,
    tipo_container: string,
    nomeMercadoria: string,
    paymentChargeType: string,
    paymentTerm: string,
    payer: string,
    paymentLocation: string,
    customerComment: string,
    emailnotifications: string,
    email: string,
    created_at: Date,
    bookingNumber?: string,
    blId?: string,
    bookingFile?: string,
    blFile?: string,
    oceanFreigth?: string,
  }

const BookingSchema = new mongoose.Schema({
    qtdContainers: {
        type: String,
        required: true,
    },
    armador: {
        type: String,
        required: true,
    },
    contractNumber: {
        type: String,
    },
    bookingOffice: {
        type: String,
    },
    shipper: {
        type: String,
    },
    forwarder: {
        type: String,
    },
    consignee: {
        type: String,
    },
    shipperRefNumber: {
        type: String,
    },
    forward_ref_number: {
        type: String,
    },
    purchaseOrderNumber: {
        type: String,
    },
    moveType: {
        type: String,
        required: true,
    },
    porto_embarque: {
        type: String,
        required: true,
    },
    data_embarque: {
        type: String,
        required: true,
    },
    porto_descarga: {
        type: String,
        required: true,
    },
    data_chegada: {
        type: String,
        required: true,
    },
    tipo_container: {
        type: String,
        required: true,
    },
    nomeMercadoria: {
        type: String,
        required: true,
    },
    paymentChargeType: {
        type: String,
        required: true,
    },
    paymentTerm: {
        type: String,
        required: true,
    },
    payer: {
        type: String,
        required: true,
    },
    paymentLocation: {
        type: String,
    },
    customerComment: {
        type: String,
    },
    emailnotifications: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'pending'
    },
    created_at: {
      type: Date,
      required:true,
      default: new Date()
    },
    bookingNumber: {
        type: String,
        required: false,
    },
    blId: {
        type: String,
        required: false,
    },
    bookingFile: {
        type: String,
        required: false,
    },
    blFile: {
        type: String,
        required: false,
    },
    oceanFreigth: {
        type: String, 
        required: false,       
    }
});

const Booking = mongoose.model<Ibooking>("Booking", BookingSchema);

export default Booking;