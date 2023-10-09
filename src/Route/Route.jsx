import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CardDetails from "../pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import Testimonial from "../pages/Testimonisl/Testimonial";
const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root> ,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("/event.json")
            },
            {
                path:"/card/:id",
                element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader:()=>fetch("/event.json")
            },   
            {
                path:"/blog",
                element:<PrivateRoute><Testimonial></Testimonial></PrivateRoute>
            },   
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            
        ]
    }    
]);

export default router;