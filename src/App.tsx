import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Admin } from "./pages/admin/admin";
import { Login } from "./pages/login/login";
import { Networks } from "./pages/networks/networks";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  }, 
  {
    path:'/admin',
    element: <Admin/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/networks',
    element: <Networks/>
  }

])

export {router};

