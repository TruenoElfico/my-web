import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";

// Shared layout for the social preview images (opengraph-image.tsx files).
// Rendered once at build time: the services hero photo on the right, with
// the copy over the photo's white, misty left side.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/jpeg";

interface OgImageContent {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  footer?: string;
  titleSize?: number;
}

const readAsset = (path: string) => readFile(join(process.cwd(), path));

export async function renderOgImage({
  badge,
  titleLine1,
  titleLine2,
  description,
  footer = "Braulio Romero · truenoelfico.com",
  titleSize = 64,
}: OgImageContent) {
  const [heroPhoto, interMedium, interBold] = await Promise.all([
    readAsset("public/services/hero.png"),
    readAsset("app/fonts/Inter-Medium.ttf"),
    readAsset("app/fonts/Inter-Bold.ttf"),
  ]);
  const heroPhotoSrc = `data:image/png;base64,${heroPhoto.toString("base64")}`;

  const png = new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", fontFamily: "Inter" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only renders plain <img> */}
        <img
          src={heroPhotoSrc}
          alt=""
          width={ogSize.width}
          height={ogSize.height}
          style={{ position: "absolute", inset: 0, objectFit: "cover", objectPosition: "right" }}
        />
        {/* Extra white wash on the left so the copy reads clearly at thumbnail size. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,0) 72%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 700,
            height: "100%",
            padding: "0 0 0 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 20px",
              borderRadius: 999,
              border: "2px solid #69E8FF",
              color: "#0e7490",
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            {badge}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#0B1220" }}>{titleLine1}</span>
            <span style={{ color: "#0891b2" }}>{titleLine2}</span>
          </div>

          <div style={{ display: "flex", marginTop: 24, fontSize: 26, fontWeight: 500, lineHeight: 1.4, color: "#374151" }}>
            {description}
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: 40, fontSize: 24, fontWeight: 700, color: "#0B1220" }}>
            <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "#69E8FF", marginRight: 12 }} />
            {footer}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    },
  );

  // ImageResponse only outputs PNG, which is ~1.2MB for a photo. WhatsApp (the
  // main way links get shared in Mexico) often drops previews over ~300KB, so
  // re-encode as JPEG.
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer()))
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(jpeg), { headers: { "Content-Type": ogContentType } });
}
