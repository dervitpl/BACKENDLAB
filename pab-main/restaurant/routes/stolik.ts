import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Stolik = require("../models/stolikSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Stolik.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      console.log(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Stolik.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Nie ma stolika o takim ID");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let stolik = new Stolik({
    nazwa: req.body.nazwa,
    iloscOsob: req.body.iloscOsob,
    status: req.body.status,
  });

  stolik
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Niepoprawne dane stolika, spróbuj ponownie");
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Stolik.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie ma stolika o takim ID")
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Stolik.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Nie ma stolika o takim ID lub został usunięty")
    });
});

export default router;