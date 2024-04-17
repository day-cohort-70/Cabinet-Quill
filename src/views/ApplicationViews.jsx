import { useEffect, useState } from "react"
import { Route, Routes, Outlet } from "react-router-dom"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localCabUser = localStorage.getItem("cab_user")
    const cabUserObject = JSON.parse(localCabUser)
    setCurrentUser(cabUserObject)
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route index element={<>Hey</>} />
      </Route>
    </Routes>
  )
}
