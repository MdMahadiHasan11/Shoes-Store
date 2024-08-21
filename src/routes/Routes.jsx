import { createBrowserRouter } from "react-router-dom";
import Errorpage from "./component/Errorpage";
import Root from "./Root";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('/Projects.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,

            },
        ]
    },
]);

export default Routes;