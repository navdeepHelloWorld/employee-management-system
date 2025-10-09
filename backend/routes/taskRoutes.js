import express from "express";
import { protect, requireAdmin } from "../middleware/authMiddleware.js";
import { createTask, getMyTasks, updateTaskStatus, getAllTasks } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", protect, requireAdmin, createTask);
router.get("/mytasks", protect, getMyTasks);
router.put("/:id", protect, updateTaskStatus);
router.get("/", protect, requireAdmin, getAllTasks);

export default router;
