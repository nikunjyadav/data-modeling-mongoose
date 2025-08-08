import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subtodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtodo",
    },
  ],
});

export const Todo = mongoose.model("Todo", todoSchema);
