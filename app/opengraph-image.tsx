import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/brand";
import { SITE } from "@/lib/site";

export const alt = "Cerrajero a domicilio en Lima 24 horas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND.darkDeep} 0%, ${BRAND.dark} 50%, ${BRAND.darkAlt} 100%)`,
          padding: 80,
          fontFamily: "system-ui, sans-serif",
          color: "white",
        }}
      >
        <p style={{ fontSize: 28, color: BRAND.orange, margin: 0, fontWeight: 700 }}>
          🔑 {SITE.name}
        </p>
        <p
          style={{
            fontSize: 56,
            fontWeight: 700,
            margin: "16px 0 0",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Cerrajeros a domicilio en Lima 24 horas
        </p>
        <p style={{ fontSize: 26, color: "#c9b8c0", margin: "20px 0 0" }}>
          Apertura de puertas, autos y cajas fuertes
        </p>
        <p
          style={{
            fontSize: 32,
            color: BRAND.orange,
            fontWeight: 700,
            margin: "40px 0 0",
          }}
        >
          ☎ {SITE.phone}
        </p>
      </div>
    ),
    { ...size },
  );
}
