"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("./products"));
const persons_1 = __importDefault(require("./persons"));
const router = (0, express_1.Router)();
router.use("/persons", products_1.default);
router.use("/pets", persons_1.default);
router.use("/products", products_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map