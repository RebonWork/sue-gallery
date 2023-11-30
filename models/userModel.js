import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    image: String,
    role: {
      type: String,
      default: "user",
    },
    cartItemsId: [String],
    address: {
      street1: String,
      street2: String,
      city: String,
      postcode: String,
    },
    wishlistItemsId: [String],
    currentOrderID: String,
    pastOrderID: [String],
    reviews: [
      {
        productID: String,
        rating: Number,
        review: String,
      },
    ],
    provider: {
      type: String,
      default: "credential",
    },
  },
  { timestamps: true }
);

const User = models?.user || model("user", userSchema);

export default User;
