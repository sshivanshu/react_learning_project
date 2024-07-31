import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter,Route,createRoutesFromElements } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Layout from "./Layout.jsx";
import Users from "./User/Users.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "users/:id",
        element: <Users />
      },
      {
        loader: githubInfoLoader,
        path: "github",
        element: <Github />
      }

    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<Users />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);
