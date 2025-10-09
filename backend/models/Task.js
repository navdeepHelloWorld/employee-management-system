import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: String,
    date: { type: Date, default: Date.now },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User"  },
    status: {
      type: String,
      enum: ["new", "active", "completed", "failed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
