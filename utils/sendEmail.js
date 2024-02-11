import nodemailer from "nodemailer";
import { html } from "./htmlEmail";

const sendEmail = async ({ to, url, text }) => {
  const trasporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: `"Sue Gallery" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Is it you? Click to confirm & join the fun",
    html: html({ url, text }),
  };

  const result = await trasporter.sendMail(mailOptions)
  return result
};

export default sendEmail;
