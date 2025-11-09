import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import { AppLayout } from "./components/Layouts/AppLayout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { AboutTeam } from "./pages/AboutTeam";
import { Portfolio } from "./pages/Portfolio";
import { FilmProduction } from "./pages/FilmProduction";
import { Branding } from "./pages/Branding";
import { ArtCuration } from "./pages/ArtCuration";

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },

      {
        path:"services",
        element:<Services />
      },

      {
        path:"aboutus",
        element:<AboutUs />
      },

      {
        path:"contact",  
        element:<Contact />
      },

      {
        path:"aboutTeam",  
        element:<AboutTeam />
      },

      {
        path:"portfolio",  
        element:<Portfolio />
      },

      {
        path:"filmproduction",  
        element:<FilmProduction />
      },

       {
        path:"branding",  
        element:<Branding />
      },

       {
        path:"artcuration",  
        element:<ArtCuration />
      }
      
    ]
  },
  
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
