import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import Layout from './layout/Layout';
import NotFoundPage from './routes/NotFound';
import Dashboard from './routes/Dashboard';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Login from './routes/Login';
import ForgotPassword from './routes/ForgotPassword';
import UpdateProfile from './routes/UpdateProfile';
import Summary from "./routes/SummaryPage";

import Signup from './routes/Signup';
import Profile from './routes/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "update-profile",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
      {
        path: "summary",
        element: <PrivateRoute><Summary /></PrivateRoute>,
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