import app from "./app.js";
import { connectToDatabse } from "./db/connection.js";
//connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabse()
    .then(() => {
    app.listen(PORT, () => console.log("server connected", PORT));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map