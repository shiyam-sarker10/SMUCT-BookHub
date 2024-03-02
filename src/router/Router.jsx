import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllAuthors from "../Pages/AllAuthors";
import AllBooks from "../Pages/AllBooks";
import AddBooks from "../Pages/AddBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            index:true,
            element: <Home></Home>
        },
        {
            path:'all books',
            element: <AllBooks></AllBooks>
        },
        {
            path:'all authors',
            element: <AllAuthors></AllAuthors>
        },
        {
            path:'add books',
            element: <AddBooks></AddBooks>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path:'register',
            element: <Register></Register>
        },
    ]
  },
]);
export default router