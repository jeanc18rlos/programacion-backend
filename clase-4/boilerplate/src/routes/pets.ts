import { Router } from "express";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  res.json({ pets });
});
router.post("/", (req, res) => {
  const { name, race, age } = req.body;
  pets.push({
    name,
    race,
    age,
  });
  res.json({ pets });
});

export default router;
