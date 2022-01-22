"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
//# sourceMappingURL=persons.js.map