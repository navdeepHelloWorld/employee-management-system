import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createTask, getMyTasks, updateTaskStatus, getAllTasks } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", protect, createTask);
router.get("/mytasks", protect, getMyTasks);
router.put("/:id", protect, updateTaskStatus);
router.get("/", protect, getAllTasks);

export default router;
