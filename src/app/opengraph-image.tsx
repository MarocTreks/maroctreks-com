import { ImageResponse } from "next/og";

export const alt = "Maroc Treks – randonnées guidées dans l’Atlas et le Sahara";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "84px", color: "white", background: "linear-gradient(135deg, #172337 0%, #253c50 62%, #e9762b 100%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 70, fontWeight: 800 }}>Maroc <span style={{ color: "#f59e42", marginLeft: 18 }}>Treks</span></div>
      <div style={{ display: "flex", width: 120, height: 8, background: "#f59e42", margin: "30px 0" }} />
      <div style={{ display: "flex", maxWidth: 920, fontSize: 42, lineHeight: 1.25 }}>Treks et randonnées au Maroc avec un guide local</div>
      <div style={{ display: "flex", marginTop: 32, fontSize: 25, color: "#d9e1e8" }}>Atlas • Toubkal • M’Goun • Sahara • Circuits sur mesure</div>
    </div>,
    size,
  );
}

