import { Router } from "express";

const router = Router();

let phrase = "Hello World, I'm a phrase";

router.get("/phrase", (req, res) => {
  res.json({ phrase });
});

router.get("/:pos", (req, res) => {
  const { pos } = req.params;
  res.json({ searched: phrase.split(" ")[pos - 1] });
});

router.post("/", (req, res) => {
  const { word } = req.body;
  console.log(req.body);
  phrase += ` ${word}`;
  res.json({
    appended: word,
    pos: phrase.split(" ").indexOf(word) + 1,
  });
});

router.put("/:pos", (req, res) => {
  const { pos } = req.params;
  const { word } = req.body;
  const previous = phrase.split(" ")[pos - 1];
  phrase = phrase.replace(phrase.split(" ")[pos - 1], word);
  res.json({
    updated: word,
    previous,
  });
});

router.delete("/:pos", (req, res) => {
  const { pos } = req.params;

  phrase = phrase.replace(phrase.split(" ")[pos - 1], "");
  res.json({
    phrase,
  });
});
export default router;
