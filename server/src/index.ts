import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/*CONFIGS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet()); // safety
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // This line tells Express to parse incoming request bodies that are encoded using the 'application/x-www-form-urlencoded' format.
app.use(cors());

/* ROUTES */
app.get("/hello", (req, res) => {
  res.send("hello world.");
});

/* SERVER */
/* SERVER RUNNING HERE */

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
