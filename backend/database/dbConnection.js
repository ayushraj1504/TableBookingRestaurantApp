import mongoose from 'mongoose';

export const dbConnection = ()=> {
  mongoose.connect("mongodb+srv://rajayush1504:ayush1234@cluster0.l4x8kdi.mongodb.net/?retryWrites=true",
  {
    dbName: "RESTURANT",
  }).then (() => {
      console.log("Connected to database successfully!");
  }).catch(err => {
    console.log(`Some error occur while connection to database! ${err}`);
  })
};

