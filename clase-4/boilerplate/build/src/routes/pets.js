"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
//# sourceMappingURL=pets.js.map