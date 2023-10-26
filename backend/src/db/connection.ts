import { connect, disconnect } from "mongoose";

export default async function connectToDatabse() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("could not connect to mongoDB ");
  }
}
async function disconnectFromDatabse() {
  try {
    await disconnect;
  } catch (error) {
    console.log(error);
    throw new Error("could not connect to mongoDB");
  }
}
export { connectToDatabse, disconnectFromDatabse };
