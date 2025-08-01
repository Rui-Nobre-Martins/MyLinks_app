import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Admin } from "./pages/admin/admin";
import { Login } from "./pages/login/login";
import { Networks } from "./pages/networks/networks";

import { Private } from "./routes/private";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  }, 
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/admin',
    element: <Private><Admin/></Private>
  },
  {
    path:'/admin/socialmedia',
    element: <Private><Networks/></Private>
  }

])

export {router};

