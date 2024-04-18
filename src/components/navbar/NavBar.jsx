import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/characters">All characters</Link>
      <Link to="/characters/aang">Aang</Link>
      <Link to="/characters/sokka">Sokka</Link>
      <Link to="/characters/iroh">Iroh</Link>
    </div>
  )
}
