import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Logout from './pages/Logout';
import Exams from './pages/Exams';
import Exam from './pages/Exam';
import EditExam from "./pages/EditExam.js"
import AddExam from './pages/AddExam';
import ProtectedRoute from './components/ProtectedRoute';
// Hi everyone
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // {
        //   path: "login",
        //   element: <Login />,
        // },
        {
          path: "/logout",
          element: <ProtectedRoute><Logout /></ProtectedRoute>,
        },
        {
          index: true,
          element: <Login /> //users will land at the login page
        },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute><Admin /></ProtectedRoute>,
      },
      {
        path: "/exams",
        element: <ProtectedRoute><Exams /></ProtectedRoute>,
      },
      {
        path: "/exams/:id",
        element: <ProtectedRoute><Exam /></ProtectedRoute>,
      },
      {
        path: "/exams/new",
        element: <ProtectedRoute><AddExam /></ProtectedRoute>
      },
      {
        path: "/exams/edit/:id",
        element: <ProtectedRoute><EditExam /></ProtectedRoute>
      },
      // {
      //   path:"",
      //   element:<ProtectedRoute/>
      // }
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
