"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage_1 = __importDefault(require("../services/storage"));
const upload = (0, multer_1.default)({ storage: storage_1.default });
exports.default = upload;
//# sourceMappingURL=uploadFile.js.map