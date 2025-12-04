import mongoose from "mongoose";

const connectDB = async () => {
  // Prevent duplicate connections
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Already connected to the database");
    return;
  }

  
  mongoose.connection.once("connected", () => {
    console.log("✅ Database connected successfully");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔁 Database reconnected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ Database connection error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ Database disconnected");
  });

  try {
   
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
      socketTimeoutMS: 45000,         
      family: 4,                      
    });
  } catch (err) {
    console.error("❌ Failed to connect to the database:", err.message);
    process.exit(1); 
  }
};

export default connectDB;