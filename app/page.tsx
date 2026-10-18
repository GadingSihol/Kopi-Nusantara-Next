import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "36px",
          borderRadius: "12px",
          textAlign: "center",
          maxWidth: "420px",
          width: "90%",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
          border: "1px solid #333333",
        }}
      >

        <h1 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>Gading Sihol Yobel Simanjuntak</h1>
        <p style={{ margin: "0 0 16px 0", color: "#aaaaaa", fontSize: "16px" }}>
          NIM: 535250084
        </p>

        <p style={{ fontSize: "14px", color: "#cccccc", lineHeight: "1.5", marginBottom: "24px" }}>
          Tugas Pertemuan 9 - Instalasi & Setup Proyek Next.js
        </p>

        <a
          href="/kopi_nusantara/index.html"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#795548",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Masuk ke Kopi Nusantara →
        </a>
      </div>
    </main>
  );
}