import React, { useState } from "react"
import AuthButton from "./AuthButton"
import Launcher from "./Launcher"

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Fuller OS Dashboard</h1>
        {user && (
          <div style={styles.userBox}>
            <img
              src={user.picture}
              alt="Profile"
              style={styles.avatar}
            />
            <span style={styles.userName}>{user.name}</span>
          </div>
        )}
      </header>

      {!user && (
        <div className="card" style={styles.card}>
          <h2>Sign In</h2>
          <p>Please sign in with your Google account to continue.</p>
          <AuthButton onLogin={setUser} />
        </div>
      )}

      {user && <Launcher />}
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
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },
  title: {
    fontSize: "2rem",
    color: "var(--primary-dark)"
  },
  userBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%"
  },
  userName: {
    fontSize: "1rem",
    fontWeight: "600"
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
