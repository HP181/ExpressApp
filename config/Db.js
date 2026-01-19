import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Check if already connected
        if (mongoose.connection.readyState === 1) {
            console.log("Using existing MongoDB connection");
            return;
        }

        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        throw new Error("Failed to connect to MongoDB: " + error.message);
    }
}

export default connectDB;