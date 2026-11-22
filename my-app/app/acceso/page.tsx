"use client";

import { useState } from "react";

export default function AccesoPage() {
  const [codigo, setCodigo] = useState("");

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f6f5",
      }}
    >
      <section
        style={{
          width: 350,
          padding: 32,
          borderRadius: 16,
          background: "#cfdcdb",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#0b4f4a", fontSize: 28, fontWeight: 700 }}>
          StockLite
        </h1>
        <p style={{ color: "#4b5d5b", fontSize: 14 }}>
          Acceso al panel de inventario
        </p>

        <label htmlFor="codigo" style={{ display: "block", marginTop: 24 }}>
          Código de acceso
        </label>
        <input
          id="codigo"
          type="text"
          placeholder="STOCK-2026"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          style={{
            width: "100%",
            marginTop: 8,
            padding: 10,
            borderRadius: 8,
            border: "none",
            textAlign: "center",
          }}
        />

        <button
          style={{
            width: "100%",
            marginTop: 24,
            padding: 12,
            borderRadius: 8,
            border: "none",
            background: "#0f766e",
            color: "white",
            cursor: "pointer",
          }}
        >
          Acceder al Dashboard
        </button>
      </section>
    </main>
  );
}
