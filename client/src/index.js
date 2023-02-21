import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css';
import App from './App';

import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import Admin from './pages/Admin';
import Logout from './pages/Logout';
import Exams from './pages/Exams';
import Exam from './pages/Exam';
import EditExam from "./pages/EditExam.js"
import AddExam from './pages/AddExam';
// Hi everyone
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login /> //users will land at the login page
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/exams",
        element: <Exams />,
      },
      {
        path: "/exams/:id",
        element: <Exam />,
      },
      {
        path: "/exams/new",
        element: <AddExam />
      },
      {
        path: "/exams/edit/:id",
        element: <EditExam />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
