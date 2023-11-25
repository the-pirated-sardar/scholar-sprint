import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout, { loader as rootLoader } from "./routes/Layout";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Contact from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import Results from "./routes/results"; 
import Summary from "./routes/SummaryPage"; 

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: rootLoader,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
      path: "results",
      element: <Results />,
      },
      {
        path: "summary",
        element: <Summary />,
        },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}