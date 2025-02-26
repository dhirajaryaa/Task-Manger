import mongoose from "mongoose";

export const connectDB = async function () {
  try {
    const connectionInstant = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );

    console.log("Database connected ", connectionInstant.Connection);
    console.log("=================================");
    
  } catch (error) {
    console.error("Database connection Error:", error);
    process.exit(1);
  }
};
