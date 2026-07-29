import path from "node:path";
import process from "node:process";
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const inputPath = process.argv[2];

if (!inputPath) {
  throw new Error("Usage: node scripts/process-logo.mjs <chroma-key-logo.png>");
}

const workspaceRoot = process.cwd();
const fullLogoPath = path.join(workspaceRoot, "public", "logo.png");
const headerLogoPath = path.join(workspaceRoot, "public", "logo-header.png");
const markPath = path.join(workspaceRoot, "public", "logo-mark.png");
const appIconPath = path.join(workspaceRoot, "src", "app", "icon.png");
const appleIconPath = path.join(workspaceRoot, "src", "app", "apple-icon.png");
const faviconPath = path.join(workspaceRoot, "src", "app", "favicon.ico");

const { data, info } = await sharp(inputPath)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(info.width * info.height * 4);

for (let index = 0; index < info.width * info.height; index += 1) {
  const sourceOffset = index * info.channels;
  const targetOffset = index * 4;
  const red = data[sourceOffset];
  const green = data[sourceOffset + 1];
  const blue = data[sourceOffset + 2];
  const greenDominance = green - Math.max(red, blue);
  const isKeyColor = green > 70 && greenDominance > 20;
  const alpha = !isKeyColor
    ? 255
    : Math.max(0, Math.min(255, Math.round(((125 - greenDominance) / 105) * 255)));

  rgba[targetOffset] = red;
  rgba[targetOffset + 1] =
    isKeyColor ? Math.min(green, Math.max(red, blue) + 3) : green;
  rgba[targetOffset + 2] = blue;
  rgba[targetOffset + 3] = alpha;
}

function findBounds(maximumY = info.height) {
  let left = info.width;
  let top = maximumY;
  let right = -1;
  let bottom = -1;

  for (let y = 0; y < maximumY; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const alpha = rgba[(y * info.width + x) * 4 + 3];

      if (alpha <= 12) continue;

      left = Math.min(left, x);
      top = Math.min(top, y);
      right = Math.max(right, x);
      bottom = Math.max(bottom, y);
    }
  }

  if (right < left || bottom < top) {
    throw new Error("No foreground artwork was detected.");
  }

  return { left, top, right, bottom };
}

function paddedRegion(bounds, padding) {
  const left = Math.max(0, bounds.left - padding);
  const top = Math.max(0, bounds.top - padding);
  const right = Math.min(info.width - 1, bounds.right + padding);
  const bottom = Math.min(info.height - 1, bounds.bottom + padding);

  return {
    left,
    top,
    width: right - left + 1,
    height: bottom - top + 1,
  };
}

function sourceImage() {
  return sharp(rgba, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  });
}

const fullRegion = paddedRegion(findBounds(), 24);
const headerRegion = paddedRegion(findBounds(Math.round(info.height * 0.67)), 20);
const markRegion = {
  left: Math.round(info.width * 0.4),
  top: Math.round(info.height * 0.2),
  width: Math.round(info.width * 0.3),
  height: Math.round(info.height * 0.3),
};

await sourceImage()
  .extract(fullRegion)
  .resize({ width: 1200, withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(fullLogoPath);

await sourceImage()
  .extract(headerRegion)
  .resize({ width: 720, withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(headerLogoPath);

await sourceImage()
  .extract(markRegion)
  .resize(512, 512, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(markPath);

await sharp(markPath)
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(appIconPath);

const safeMark = await sharp(markPath)
  .resize(420, 420, { fit: "contain" })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: { r: 247, g: 241, b: 231, alpha: 1 },
  },
})
  .composite([{ input: safeMark, gravity: "center" }])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(appleIconPath);

const faviconSizes = [16, 32, 48];
const faviconImages = await Promise.all(
  faviconSizes.map(async (size) => {
    const inset = Math.max(1, Math.round(size * 0.08));
    const artwork = await sharp(markPath)
      .resize(size - inset * 2, size - inset * 2, { fit: "contain" })
      .png()
      .toBuffer();

    return sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 247, g: 241, b: 231, alpha: 1 },
      },
    })
      .composite([{ input: artwork, gravity: "center" }])
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();
  }),
);
const faviconDirectory = Buffer.alloc(6 + faviconImages.length * 16);
faviconDirectory.writeUInt16LE(0, 0);
faviconDirectory.writeUInt16LE(1, 2);
faviconDirectory.writeUInt16LE(faviconImages.length, 4);

let faviconOffset = faviconDirectory.length;
faviconImages.forEach((image, index) => {
  const entryOffset = 6 + index * 16;
  const size = faviconSizes[index];

  faviconDirectory.writeUInt8(size, entryOffset);
  faviconDirectory.writeUInt8(size, entryOffset + 1);
  faviconDirectory.writeUInt8(0, entryOffset + 2);
  faviconDirectory.writeUInt8(0, entryOffset + 3);
  faviconDirectory.writeUInt16LE(1, entryOffset + 4);
  faviconDirectory.writeUInt16LE(32, entryOffset + 6);
  faviconDirectory.writeUInt32LE(image.length, entryOffset + 8);
  faviconDirectory.writeUInt32LE(faviconOffset, entryOffset + 12);
  faviconOffset += image.length;
});

await writeFile(faviconPath, Buffer.concat([faviconDirectory, ...faviconImages]));

console.log(
  JSON.stringify(
    {
      fullLogoPath,
      headerLogoPath,
      markPath,
      appIconPath,
      appleIconPath,
      faviconPath,
      fullRegion,
      headerRegion,
      markRegion,
    },
    null,
    2,
  ),
);
