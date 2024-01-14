import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    cover: {
      url:{type:String},
      publicID:{type:String}
    },
    images: [{
      url:{type:String},
      publicID:{type:String}
    }],
    stock:{
      type:String,
      required:true
    },
    reviews:[{
      userId:String,
      comment:String,
      rating:Number
    }]
  },
  { timestamps: true }
);

const Product = models.product || model("product", productSchema);

export default Product;
