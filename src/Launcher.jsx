import React from "react"
import { APPS } from "./apps"

export default function Launcher() {
  return (
    <div style={styles.grid}>
      {APPS.map(app => (
        <div
          key={app.id}
          style={{ ...styles.tile, backgroundColor: app.color }}
          onClick={() => (window.location.href = app.url)}
        >
          <div style={styles.label}>{app.name}</div>
        </div>
      ))}
    </div>
  )
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: "1rem",
    padding: "1rem"
  },
  tile: {
    height: "120px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
    transition: "transform 0.15s ease"
  },
  label: {
    textAlign: "center",
    padding: "0 0.5rem"
  }
}
