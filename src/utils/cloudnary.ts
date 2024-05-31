require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export async function run(image: any) {
//   try {
//     const result = await cloudinary.uploader.upload(image);
//     console.log(`Successfully uploaded image`);
//     console.log(`> Result: ${result.secure_url}`);
//     return result.secure_url;
//   } catch (err) {
//     console.log(err);
//   }
// }

export const UploadImage = async (file: File, folder: string) => {
  const bufffer = await file.arrayBuffer();
  const bytes = Buffer.from(bufffer);
  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'auto',
          folder: folder,
        },
        async (err: any, result: any) => {
          if (err) {
            return reject(err.message);
          }
          return resolve(result);
        }
      )
      .end(bytes);
  });
};
