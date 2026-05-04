import React from 'react'

export default function App() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Fuller OS Dashboard</h1>
        <p style={styles.subtitle}>PWA Operating System Mission Control</p>
      </header>

      <main style={styles.main}>
        <div className="card" style={styles.card}>
          <h2>System Status</h2>
          <p>Your Fuller OS Dashboard is running in development mode.</p>
          <p>Once deployed, this panel will show live build and system data.</p>
        </div>

        <div className="card" style={styles.card}>
          <h2>Next Steps</h2>
          <ul style={styles.list}>
            <li>Connect real dashboard modules</li>
            <li>Integrate travel suite components</li>
            <li>Enable PWA offline mode</li>
            <li>Deploy to Netlify</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: 'var(--surface-alt)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  header: {
    textAlign: 'center',
    padding: '1rem 0'
  },
  title: {
    fontSize: '2rem',
    color: 'var(--primary-dark)',
    marginBottom: '0.25rem'
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--accent)'
  },
  main: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: '1fr',
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto'
  },
  card: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '1.25rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
  },
  list: {
    marginTop: '0.75rem',
    paddingLeft: '1.25rem',
    lineHeight: '1.6'
  }
}
