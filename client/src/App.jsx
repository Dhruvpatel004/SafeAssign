import Dashboard from "./pages/dashbord";
import Login from "./pages/login"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/*",
    element: <>404 - Page not Fount</>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
