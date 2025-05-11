const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Create the public directory if it doesn't exist
const publicDir = path.join(process.cwd(), "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Create a 1200x630 image (standard OG image size)
sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 59, g: 130, b: 246, alpha: 1 }, // Blue background
  },
})
  .composite([
    {
      input: Buffer.from(
        `<svg width="1200" height="630">
          <style>
            text { fill: white; font-family: Arial, sans-serif; }
          </style>
          <text x="50%" y="40%" text-anchor="middle" font-size="72">TeraBox Stream</text>
          <text x="50%" y="55%" text-anchor="middle" font-size="36">Watch &amp; Download TeraBox Videos Online</text>
        </svg>`
      ),
      gravity: "center",
    },
  ])
  .toFile(path.join(publicDir, "og-image.jpg"))
  .then(() => {
    console.log("OG image generated successfully!");
  })
  .catch((err) => {
    console.error("Error generating OG image:", err);
  });
