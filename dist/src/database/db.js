"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = require("moment");
const mongoose_1 = __importDefault(require("mongoose"));
function connectDatabase() {
    //  *********** BD PROD ************
    mongoose_1.default
        .connect(`mongodb+srv://karavel_app:karavelapp2023@cluster0.oem86y1.mongodb.net/karavel?retryWrites=true&w=majority`, (err) => {
        if (err) {
            console.error('FAILED TO CONNECT TO MONGODB PROD');
            console.error(err);
        }
        else {
            console.log('CONNECTED TO MONGODB PROD as ', new Date((0, moment_1.now)()));
        }
    });
    //   *********** BD LOCAL ************
    // mongoose
    // .connect(
    //   `mongodb://fabio:senha123@localhost:27017/karavel`, //DATABASE LOCAL
    //   (err) => {
    //     if (err) {
    //       console.error('FAILED TO CONNECT TO MONGODB LOCAL');
    //       console.error(err);
    //     } else {
    //       console.log('CONNECTED TO MONGODB LOCAL as ', new Date(now()));
    //     }
    //   }
    // )
    //   *********** BD HOMOLOG ************
    // mongoose
    // .connect(
    //   `mongodb+srv://karavel_app:karavelapp2023@cluster0.oem86y1.mongodb.net/karavel_dev?retryWrites=true&w=majority`, //DATABASE HOMOLOG
    //   (err) => {
    //     if (err) {
    //       console.error('FAILED TO CONNECT TO MONGODB HOMOLOG');
    //       console.error(err);
    //     } else {
    //       console.log('CONNECTED TO MONGODB HOMOLOG as ', new Date(now()));
    //     }
    //   }
    // )
}
exports.default = connectDatabase;
;
