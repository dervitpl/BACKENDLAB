
import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import stolikRoutes from "../routes/stolik";
import restauracjaRoutes from "../routes/restauracja";
import pracownikRoutes from "../routes/pracownik";
import rezerwacjaRoutes from "../routes/rezerwacja"
import produktRoutes from "../routes/produkt"
import danieRoutes from "../routes/danie"
import zamowienieRoutes from "../routes/zamowienie"

const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

const dbURI =
  "mongodb+srv://kacpermucha:8KIWbob0VeAA2zHW@cluster0.a1mmwca.mongodb.net/?";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result:any) => console.log("Connected to Mongoose: " + app.listen(3000)))
    .catch((err:any) => console.log("Failed to connect to Mongoose: " + err))

app.use(bodyParser.json());

app.use("/stolik", stolikRoutes);
app.use("/restauracja", restauracjaRoutes);
app.use("/pracownik", pracownikRoutes);
app.use("/rezerwacja", rezerwacjaRoutes);
app.use("/produkt", produktRoutes);
app.use("/danie", danieRoutes);
app.use("/zamownie", zamowienieRoutes);

app.get("/", function (req: Request, res: Response) {
  res.send("Witaj w API restauracji");
});