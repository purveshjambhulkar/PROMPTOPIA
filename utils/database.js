import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log(`MONGODB IS ALREADY CONNECTED`);
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log(`MONGODB CONNECTED SUCCESFULLY`);
  } catch (error) {
    console.log(`MONGODB CONNECTION ERROR${error}`);
  }
};
