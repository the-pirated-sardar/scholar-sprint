import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import Layout, { loader as rootLoader } from './routes/Layout';
import NotFoundPage from './routes/NotFound';
import Dashboard from './routes/Dashboard';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Login from './routes/Login';
import ForgotPassword from './routes/ForgotPassword';
import UpdateProfile from './routes/UpdateProfile';
import Signup from './routes/Signup';

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
        element: <PrivateRoute component={<Dashboard />} />,
      },
      {
        path: "update-profile",
        element: <PrivateRoute component={<UpdateProfile />} />
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {

  return <RouterProvider router={router} />
}