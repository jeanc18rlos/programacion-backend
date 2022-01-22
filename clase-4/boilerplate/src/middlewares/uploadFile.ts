import multer from "multer";
import storage from "../services/storage";

const upload = multer({ storage });

export default upload;