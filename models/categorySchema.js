import { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
  categoryTitle: {
    type: String,
    required: true,
  },
});

const Category = models.category || model("category", categorySchema);

export default Category;
