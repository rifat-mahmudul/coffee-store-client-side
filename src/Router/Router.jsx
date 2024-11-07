import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";

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
            }
        ]
    },
]);