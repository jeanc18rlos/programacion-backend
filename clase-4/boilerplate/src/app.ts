/* istanbul ignore file */

import ApiRoutes from "./routes";
import express from "express";
import path from "path";
// Vars

/**
 * Creates a Express application
 * @class
 */
class App {
  private PORT;
  private HOST;
  public app: typeof express;

  /**
   *
   * @param port Port that the application should be initialized
   * @param host Host that the application should be initialized
   */
  constructor(port: string | number, host: string) {
    this.PORT = port;
    this.HOST = host;
    this.app = express();
  }

  listen() {
    this.app.listen(this.PORT);
  }
  start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/api/v1", ApiRoutes);

    
    this.app.use("/static", express.static(path.resolve(__dirname, "../../public")));
    this.app.use("/uploads", express.static(path.resolve(__dirname, "../../uploads")));
    
    this.app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../../public/index.html"));
    });
  }
}

export default App;
