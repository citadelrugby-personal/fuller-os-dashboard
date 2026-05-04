import React, { useEffect } from "react"
import { initGoogleSignIn, renderGoogleButton } from "./auth"

export default function AuthButton({ onLogin }) {
  const CLIENT_ID = "555860908271-ko3og8dr5n6v3on16g39idpp43rbentt.apps.googleusercontent.com"

  useEffect(() => {
    // Wait for the Google script to load before initializing
    const interval = setInterval(() => {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        initGoogleSignIn(CLIENT_ID, onLogin)
        renderGoogleButton()
        clearInterval(interval)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.wrapper}>
      <div id="google-signin"></div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem"
  }
}
