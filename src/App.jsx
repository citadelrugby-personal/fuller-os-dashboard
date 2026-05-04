import React, { useState } from "react"
import AuthButton from "./AuthButton"

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Fuller OS Dashboard</h1>
        <p style={styles.subtitle}>PWA Operating System Mission Control</p>
      </header>

      {!user && (
        <div className="card" style={styles.card}>
          <h2>Sign In</h2>
          <p>Please sign in with your Google account to continue.</p>
          <AuthButton onLogin={setUser} />
        </div>
      )}

      {user && (
        <div className="card" style={styles.card}>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <img
            src={user.picture}
            alt="Profile"
            style={{ width: 80, borderRadius: "50%", marginTop: "1rem" }}
          />
        </div>
      )}
    </div>
  )
}

const styles = {
  app: {
    minHeight: "100vh",
    backgroundColor: "var(--surface-alt)",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  header: {
    textAlign: "center",
    padding: "1rem 0"
  },
  title: {
    fontSize: "2rem",
    color: "var(--primary-dark)",
    marginBottom: "0.25rem"
  },
  subtitle: {
    fontSize: "1rem",
    color: "var(--accent)"
  },
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    padding: "1.25rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
    maxWidth: "500px",
    margin: "0 auto"
  }
}
