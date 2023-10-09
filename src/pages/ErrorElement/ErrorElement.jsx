import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-2xl mt-8">Opssss sorry!!! </h1>
            <p className="text-center">Page not found</p>
            <div className="flex justify-center mt-4">
           <Link to="/"> <button className="py-2 px-3 bg-[#000A7B] bg-opacity-90 text-white rounded-lg">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;