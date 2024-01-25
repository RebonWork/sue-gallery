import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    userID: String,
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    password: String,
    image: String,
    role: {
      type: String,
      default: "user",
    },
    cartItemsId: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
      },
    ],
    address: {
      street1: String,
      street2: String,
      city: String,
      postcode: String,
    },
    wishlistItemsId: [
      { productId: { type: Schema.Types.ObjectId, ref: "Product" } },
    ],
    orderID: [{ orderId: { type: Schema.Types.ObjectId, ref: "Order" } }],
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
