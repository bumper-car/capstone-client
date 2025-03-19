import { Link } from "react-router-dom"
import "../styles/NavBar.css"

function NavBar() {
  return (
    <header className="header">
      <h1 className="logo">Capstone</h1>
      <nav>
        <Link to="/analyze">analyze</Link>
        <Link to="/notice">notice</Link>
      </nav>
    </header>
  )
}

export default NavBar
