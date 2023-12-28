import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(fileUrlPath, {
      resource_type: "auto",
    });
    console.log(response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(filePath);
    return null;
  }
};
const upload = multer({ storage: storage });

export { uploadOnCloudinary };
