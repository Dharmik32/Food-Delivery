import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONOG_URL, {
      dbName: "food-del",
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
