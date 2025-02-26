import { configDotenv } from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

configDotenv({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("server running on port :", port);
    });
  })
  .catch((error) => {
    console.error("Mongodb connection error:", error);
    process.exit(1);
  });
