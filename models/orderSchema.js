import { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    orderID: String,
    userID: String,
    productID: String,
    Quantity: Number,
    status: String,
    orderPrice: Number,
    paymentStatus: String,
  },
  { timestamps: true }
);

const Order = models.order || model("order", orderSchema);

export default Order;
