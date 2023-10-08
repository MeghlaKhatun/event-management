import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CardDetails from "../pages/CardDetails/CardDetails";

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
                element:<CardDetails></CardDetails>,
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