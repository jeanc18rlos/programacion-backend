import { Router } from "express";
import upload from "../middlewares/uploadFile";
const router = Router();

router.get("/words", (req, res) => {
  const { ...rest } = req.query;
  res.send({ "Hello World": rest });
});

router.get("/:id", (req, res) => {
  const { ...rest } = req.params;

  res.send({ "Hello World": rest });
});

router.post("/uploadFile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("File not found");
    return next(error);
  }
  res.send(file);
});

export default router;
