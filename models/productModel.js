import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: String,
    images: [String],
  },
  { timestamps: true }
);

const Product = models.product || model("product", productSchema);

export default Product;
