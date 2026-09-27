import { Link, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="navbar navbar-expand bg-dark" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit Tracker
          </Link>
        </div>
      </header>
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<h1 className="h3">Dashboard</h1>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App
