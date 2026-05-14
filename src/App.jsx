import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import { List } from './List'
import { Single } from './Single'
import { New } from './New'
import './App.css'

export const App = () => {

  return (
    <>
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
             <NavLink to={'/'} className="nav-link">Dobok</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/new'} className="nav-link">Új dob</NavLink>
            </li>
          </ul>
      </div>
    </nav>
        <Routes>
          <Route path="/" exact element={<List />} />
          <Route path="/new" exact element={<New />} />
          <Route path="/single/:dobId" exact element={<Single />} />
        </Routes>
      </Router>
    </>
  )
}
