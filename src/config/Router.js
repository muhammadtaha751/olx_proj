import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
  } from "react-router-dom"
  import Dashboard from "../screens/Dashboard";
  import PostAd from "../screens/PostAd";
import AdDetail from "../screens/AdDetail";
  
  

  
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [, 
        {
          path: "/",
          element: <Dashboard/>,
        }, 
        {
          path: "/dashboard",
          element: <Dashboard/>,
        },
        {
          path: "/postad",
          element: <PostAd/>,
        },
        {
          path: "/addetail",
          element: <AdDetail/>,
        },

      ]
  
    }
  ]);
  
  function Router() {
    return <RouterProvider router={router} />
  }
  
  function Main() {
    const navigate = useNavigate()
    
  
    return <div>
  <Outlet/>
    </div>
  }
  
  export default Router