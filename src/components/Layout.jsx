import { Outlet } from "react-router-dom"
import { NavBar } from "./navbar/NavBar"

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <div>Footer</div>
    </>
  )
}
