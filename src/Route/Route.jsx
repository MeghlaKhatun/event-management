import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CardDetails from "../pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root> , 
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