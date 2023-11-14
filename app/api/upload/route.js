"use server";


export async function POST(req) {

    const cloudinary = require('cloudinary').v2;
    require('../../../cloudinaryConfig');

    const apiSecret = cloudinary.config().api_secret;
    const timestamp = Math.round((new Date).getTime()/1000);
    const signature = cloudinary.utils.api_sign_request({
        timestamp: timestamp,
        folder: 'my-uploads'}, apiSecret);
    
    
  try {
    const image = await req.json();
    const formData = new FormData();
    const api = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload`;
    formData.append("file", image);
    formData.append("api_key", process.env.CLOUDINARY_API_KEY );
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", "my-uploads");

    const upload = await fetch(api, {
      method: "POST",
      body: formData,
    }).then((r) => r.json());
    console.log(upload.secure_url);
    return new Response(JSON.stringify(upload.secure_url));
  } catch (err) {
    console.error(err);
  }
}
