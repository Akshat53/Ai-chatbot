import app from "./app.js";
import { connectToDatabse } from "./db/connection.js";

//connections and listeners

connectToDatabse()
  .then(() => {
    app.listen(5000, () => console.log("server connected"));
  })
  .catch((err) => console.log(err));