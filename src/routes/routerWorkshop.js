import { Router } from "express";
import {
    create,
    index,
    update,
    destroy,
} from "../controllers/workshopControllers.js";

const router = Router();

router.post("/", create);
router.get("/", index);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;

// const express = require("express");
// const router = express.Router();
// const workshopControllers = require('../controllers/workshopControllers');

// router.post("/", create);
// router.get("/", index);
// router.put("/:id", update);
// router.delete("/:id", destroy);

// export default router