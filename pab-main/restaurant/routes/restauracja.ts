import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Restauracja = require("../models/restauracjaSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Restauracja.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      console.log(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Restauracja.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Nie ma restauracji o takim ID");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let restauracja = new Restauracja({
    nazwa: req.body.nazwa,
    adres: req.body.adres,
    telefon: req.body.telefon,
    nip: req.body.nip,
    email: req.body.email,
    www: req.body.www,
  });

  restauracja
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Niepoprawne dane restauracji, spróbuj jeszcze raz");
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Restauracja.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie mam restauracji o takim ID");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Restauracja.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "Nie ma restauracji o takim ID lub została usunięta");
    });
});
export default router;