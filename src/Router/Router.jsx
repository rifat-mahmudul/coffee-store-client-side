import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/addCoffee',
                element : <AddCoffee></AddCoffee>
            },
            {
                path : '/updateCoffee/:id',
                element : <UpdateCoffee></UpdateCoffee>,
                loader : ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            }
        ]
    },
]);