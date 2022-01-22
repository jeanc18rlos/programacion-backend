import { Router } from "express";
import productRoutes from "./products";
import personRoutes from "./persons";
import wordRoutes from "./words";

const router = Router();

router.use("/persons", productRoutes);
router.use("/pets", personRoutes);
router.use("/products", productRoutes);

export default router;
