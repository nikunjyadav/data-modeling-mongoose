import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    parent_todo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  },
  { timestamps: true }
);

export const Subtodo = mongoose.model("Subtodo", subtodoSchema);
