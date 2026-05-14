import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { List } from './List'
import './App.css'

export const App = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>Dobok</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>Új dob</NavLink>
            </li>
          </ul>
      </div>

    </nav>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </Router>
    </>
  )
}
