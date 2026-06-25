import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public", "images");
const outPath = path.join(outDir, "social-share.png");

const width = 1200;
const height = 630;

function logoMark() {
  return `
    <g transform="translate(254 24) scale(1.18)">
      <path fill="rgba(12,7,17,0.46)" d="M296 92h102q53 0 86 34t33 88v78q0 54-33 88t-86 34H296v-62h86q28 0 46-18t18-47v-68q0-29-18-47t-46-18h-86z"/>
      <path fill="#c084fc" d="M280 78h102q53 0 86 34t33 88v78q0 54-33 88t-86 34H280v-62h86q28 0 46-18t18-47v-68q0-29-18-47t-46-18h-86z"/>
      <path fill="rgba(12,7,17,0.46)" d="M96 158h139q32 0 52 19t20 50v49q0 31-20 50t-52 19h-36l70 69h-81l-90-91v-55h108q16 0 26-9t10-25q0-16-10-25t-26-9H96z"/>
      <path fill="#2dd4bf" d="M80 144h139q32 0 52 19t20 50v49q0 31-20 50t-52 19h-36l70 69h-81l-90-91v-55h108q16 0 26-9t10-25q0-16-10-25t-26-9H80z"/>
      <path fill="#fff7f0" d="M80 78h310v58H266v264h-68V136H80z"/>
      <rect fill="#b8f34a" x="198" y="364" width="68" height="36" rx="9"/>
    </g>
  `;
}

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="centerGlow" cx="50%" cy="48%" r="54%">
      <stop offset="0%" stop-color="#c084fc" stop-opacity="0.28"/>
      <stop offset="36%" stop-color="#2dd4bf" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#140c1c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="limeGlow" cx="50%" cy="70%" r="40%">
      <stop offset="0%" stop-color="#b8f34a" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#140c1c" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0H0V72" fill="none" stroke="#fff7f0" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
    <filter id="logoGlow" x="-22%" y="-28%" width="150%" height="160%">
      <feDropShadow dx="0" dy="26" stdDeviation="24" flood-color="#000000" flood-opacity="0.42"/>
      <feDropShadow dx="0" dy="0" stdDeviation="22" flood-color="#c084fc" flood-opacity="0.22"/>
    </filter>
  </defs>

  <rect width="${width}" height="${height}" fill="#140c1c"/>
  <rect width="${width}" height="${height}" fill="url(#grid)" opacity="0.72"/>
  <rect width="${width}" height="${height}" fill="url(#centerGlow)"/>
  <rect width="${width}" height="${height}" fill="url(#limeGlow)"/>

  <g filter="url(#logoGlow)">
    ${logoMark()}
  </g>
</svg>
`;

await mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(outPath);

console.log(outPath);
