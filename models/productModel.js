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
      name:{
        type:String,
        required:true
      },
      id:{
        type: Schema.Types.ObjectId,
        ref:"Category",
      }
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
    }],
    isActive: {
      type: Boolean,
    }
  },
  { timestamps: true }
);

const Product = models.product || model("product", productSchema);

export default Product;
