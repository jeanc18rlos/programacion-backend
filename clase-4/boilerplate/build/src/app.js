"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
class App {
    constructor(port, host) {
        this.PORT = port;
        this.HOST = host;
        this.app = (0, express_1.default)();
    }
    listen() {
        this.app.listen(this.PORT);
    }
    start() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use("/api/v1", routes_1.default);
        this.app.use("/static", express_1.default.static(path_1.default.resolve(__dirname, "../../public")));
        this.app.use("/uploads", express_1.default.static(path_1.default.resolve(__dirname, "../../uploads")));
        this.app.get("/", (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, "../../public/index.html"));
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map