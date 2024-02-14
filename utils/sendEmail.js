import nodemailer from "nodemailer";
import { resetPasswordEmail, verifyEmailhtml } from "./htmlEmail";

export const sendVerificationEmail = async ({ to, url, user }) => {
  console.log({ to, url, user });
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
    html: verifyEmailhtml({ url, user }),
  };

  const result = await trasporter.sendMail(mailOptions)
  return result
};
export const sendResetPasswordEmail = async ({ to, url, user }) => {
  console.log({ to, url, user });
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
    html: resetPasswordEmail({ url, user }),
  };

  const result = await trasporter.sendMail(mailOptions)
  return result
};
