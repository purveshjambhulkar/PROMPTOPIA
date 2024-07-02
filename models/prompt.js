import mongoose, { model, models } from "mongoose";
import User from "./user";

const PromptSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  prompt: {
    type: String,
    required: [true, "Prompt cannot be Empty.."],
  },

  tag: {
    type: String,
    required: [true, "Tag cannot be Empty.."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
