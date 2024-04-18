import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <ul id="navbar">
      <li className="navbar-item">
        <Link to="/" className="navbar-link">
          All Products
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/new" className="navbar-link">
          New Product
        </Link>
      </li>
      <li className="navbar-item navbar-logout">
        <Link
          className="navbar-link"
          to=""
          onClick={() => {
            localStorage.removeItem("cab_user")
            navigate("/", { replace: true })
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  )
}
