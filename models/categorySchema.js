import { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true
  },
});

const Category = models?.category || model("category", categorySchema);

export default Category;
