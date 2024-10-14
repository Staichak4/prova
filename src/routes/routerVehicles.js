import { Router } from "express";
import {
    create,
    index,
    update,
    destroy,
} from "../controllers/vehiclesController.js";

const router = Router();

router.post("/", create);
router.get("/", index);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
