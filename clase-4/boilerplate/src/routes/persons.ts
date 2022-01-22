import { Router } from "express";

const router = Router();

const persons = [];

router.get("/", (req, res) => {
  res.json({ persons });
});

router.post("/", (req, res) => {
  const { name, lastName, age } = req.body;
  persons.push({
    name,
    lastName,
    age,
  });
  res.json({ persons });
});

export default router;
