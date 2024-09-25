import mongoose from "mongoose";
export default function connectDatabase(){
  //  *********** BD PROD ************
  mongoose
    .connect(
      `mongodb+srv://karavel_app:karavelapp2023@cluster0.oem86y1.mongodb.net/karavel?retryWrites=true&w=majority`,
      (err) => {
        if (err) {
          console.error('FAILED TO CONNECT TO MONGODB PROD');
          console.error(err);
        } else {
          console.log('CONNECTED TO MONGODB PROD');
        }
      }
    )

    //   *********** BD LOCAL ************
    // mongoose
    // .connect(
    //   `mongodb://fabio:senha123@localhost:27017/karavel`, //DATABASE LOCAL
    //   (err) => {
    //     if (err) {
    //       console.error('FAILED TO CONNECT TO MONGODB LOCAL');
    //       console.error(err);
    //     } else {
    //       console.log('CONNECTED TO MONGODB LOCAL');
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
    //       console.log('CONNECTED TO MONGODB HOMOLOG');
    //     }
    //   }
    // )



}; 
