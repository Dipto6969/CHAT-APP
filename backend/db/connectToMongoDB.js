import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsAllowInvalidCertificates: true, // only for development/testing!
});
         console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
}

export default connectToMongoDB;