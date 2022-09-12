import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Pracownik = require("../models/pracownikSchema");
const router = express.Router();


router.get("/", (req: Request, res: Response) => {
    Pracownik.find()
      .then((result: any) => {
        res.send(result);
      })
      .catch((err: any) => {
        console.log(err);
      });
  });
  
  router.get("/getSingle/:id", (req: Request, res: Response) => {
    Pracownik.findById(req.params.id)
      .then((result: any) => {
        res.send(result);
      })
      .catch((err: any) => {
        res.send("Nie ma pracownika o takim ID");
      });
  });
  
  router.post("/addNew", (req: Request, res: Response) => {
    let pracownik = new Pracownik({
      imie: req.body.imie,
      nazwisko: req.body.nazwisko,
      stanowisko: req.body.stanowisko,
    });
  
    pracownik
      .save()
      .then((result: any) => {
        res.send(result);
      })
      .catch((error: any) => {
        res.send("Niepoprawne dane pracownika");
      });
  });
  
  router.put("/updateSingle/:id", (req: Request, res: Response) => {
    Pracownik.findByIdAndUpdate(req.params.id, req.body, {new:true})
      .then((result: any) => {
        res.send(result);
      })
      .catch((error: any) => {
        res.send("Nie ma pracownika o takim ID")
      });
  });
  
  router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
    Pracownik.findByIdAndRemove(req.params.id)
      .then((result: any) => {
        res.send(result);
      })
      .catch((err: any) => {
        res.send("Nie ma pracownika o takim ID lub został usunięty")
      });
  });

export default router;