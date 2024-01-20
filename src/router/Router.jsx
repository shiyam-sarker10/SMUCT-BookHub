import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllAuthors from "../Pages/AllAuthors";
import AllBooks from "../Pages/AllBooks";
import AddBooks from "../Pages/AddBooks";

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
    ]
  },
]);
export default router