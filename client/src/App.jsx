import Dashboard from './pages/Dashbord';
import Login from "./pages/LoginPage"
import DocSimilarity from "./pages/DocSimilarity"
import C from './components/classoom/C';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Classsromms from './components/utils/Classsromms';
import User from './components/User';
import Stream from './components/classoom/Stream';
import Classwork from './components/classoom/Classwork';
import People from './components/classoom/People';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
        path: "/",
        element: <Classsromms/>,
      },
      {
        path: "c/",
        element: <C/>,
        children: [
          {
            path: "classwork/",
            element: <Classwork/>,
          },
          {
            path: "people/",
            element: <People/>,
          },
          {
            path: "",
            element: <Stream/>,
          },
        ]
      },
      {
        path: "user/",
        element: <User/>,
      },
    ]

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
