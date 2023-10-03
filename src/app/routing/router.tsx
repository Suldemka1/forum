import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Main from "../../pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Main />} />
    </Route>
  )
)

function AppRouter() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRouter
