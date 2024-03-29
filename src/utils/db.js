import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error("connection failed")
    console.log(error);
  }
};

export default connect;