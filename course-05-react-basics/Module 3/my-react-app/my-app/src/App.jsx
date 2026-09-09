import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Login from './Components/Login'
import CurrentMessage from './Components/CurrentMessage'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">My Website</div>

        <div className="nav-links">
          <Link className="nav-link" to="/">Homepage</Link>
          <Link className="nav-link" to="/about">About Page</Link>
          <Link className="nav-link" to="/login">Login Page</Link>
          <Link className="nav-link" to="/contact">Contact Page</Link>
          <Link className="nav-link" to="/message">Message Page</Link>
        </div>
      </nav>

      <main className="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<CurrentMessage />} />
        </Routes>
      </main>
    </>
  )
}

export default App