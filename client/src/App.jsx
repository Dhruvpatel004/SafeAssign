import Dashboard from "./pages/dashbord";
import Login from "./pages/LoginPage"
import DocSimilarity from "./pages/DocSimilarity"

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
    path: "/doc-similarity",
    element: <DocSimilarity/>,
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
