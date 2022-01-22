"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadFile_1 = __importDefault(require("../middlewares/uploadFile"));
const router = (0, express_1.Router)();
router.get("/words", (req, res) => {
    const rest = __rest(req.query, []);
    res.send({ "Hello World": rest });
});
router.get("/:id", (req, res) => {
    const rest = __rest(req.params, []);
    res.send({ "Hello World": rest });
});
router.post("/uploadFile", uploadFile_1.default.single("myFile"), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error("File not found");
        return next(error);
    }
    res.send(file);
});
exports.default = router;
//# sourceMappingURL=products.js.map