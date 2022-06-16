import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost/test";

const connect = () =>
  mongoose.connect(mongodbUrl);

const close = () => mongoose.connection.close();

export default {
  connect,
  close,
};
