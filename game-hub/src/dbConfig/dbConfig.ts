import mongoose from "mongoose";

let cached: { conn: any; promise: any } = (global as any).mongoose || {};

if (!cached) cached = (global as any).mongoose = { conn: null, promise: null };

const connect = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const dbUri =
      process.env.NODE_ENV === "test"
        ? process.env.MONGO_URI_TEST!
        : process.env.MONGO_URI!;

    cached.promise = mongoose.connect(dbUri).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;

  mongoose.connection.on("connected", () => {
    console.log(`MongoDB connected to ${process.env.NODE_ENV === "test" ? process.env.MONGO_URI_TEST : process.env.MONGO_URI}`);
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error", err);
  });

  return cached.conn;
};

export default connect;