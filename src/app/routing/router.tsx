import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Map from "../../pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Map />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
