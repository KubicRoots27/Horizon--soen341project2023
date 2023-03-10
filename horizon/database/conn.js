import mongoose from "mongoose";

const connectDB = async (databaseName) => {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://christina:soen341@cluster0.btey6eo.mongodb.net/${databaseName}?retryWrites=true&w=majority`
    );

    if (connection.readystate === 1) {
      return Promise.resolve(true);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectDB;
